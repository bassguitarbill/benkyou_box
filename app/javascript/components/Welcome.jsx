import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './App';

import Button from 'rsuite/Button';
import Col from 'rsuite/Col';
import Grid from 'rsuite/Grid';
import Loader from 'rsuite/Loader';
import Panel from 'rsuite/Panel';
import Row from 'rsuite/Row';

function sp(count) { return `submission${count != 1 ? 's' : ''}`; }

function CurrentUser({ user }) {
  const { count } = user;
  if (count) {
    return (
      <div>
        <p>{`You've completed ${count} ${sp(count)} today!`}</p>
        <Link to="/submissions">
          <Button appearance="primary">{'See mine'}</Button>
        </Link>
        <Link to="/submissions/new">
          <Button appearance="default">{'Submit more?'}</Button>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <p>{`You haven't completed any ${sp(0)} today!`}</p>
        <Link to="/submissions/new">
          <Button appearance="primary">{'Let\'s fix that!'}</Button>
        </Link>
      </div>
    );
  }
}

function OtherUser({ name, id, count }) {
  return (
    <div>
      <p>{`${name} has completed ${count} ${sp(count)} today.`}</p>
      <Link to={`/submissions?user=${id}`}>
        <Button appearance="primary">{`See ${name}'s submissions`}</Button>
      </Link>
    </div>
  );
}

export default function Welcome() {
  const currentUser = useContext(UserContext);
  const [counts, setCounts] = useState([]);
  const currentUserCount = counts.find(c => c.id === currentUser.id) || {}
  const otherUserCounts = counts.filter(c => c.id !== currentUser.id)

  useEffect(() => {
    fetch('/api/v1/submissions/today_counts').then(p => p.json()).then(setCounts)
  }, []);

  return (
      <Choose>
        <When condition={counts.length > 0}>
          <Grid fluid>
            <Row>
              <Col xs={24} md={16} mdOffset={4}>
                <Panel shaded>
                  <CurrentUser user={currentUserCount} />
                </Panel>
              </Col>
            </Row>
            <For each='user' of={ otherUserCounts }>
              <Row key={user.id}>
                <Col xs={24} md={16} mdOffset={4}>
                  <Panel shaded key={user.id}>
                    <OtherUser id={user.id} name={user.name} count={user.count} />
                  </Panel>
                </Col>
              </Row>
            </For>
          </Grid>
        </When>
        <When condition={counts.length === 0}>
          <Loader size="lg" />
        </When>
      </Choose>
  );
}
