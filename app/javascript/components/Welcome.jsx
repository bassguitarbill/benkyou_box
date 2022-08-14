import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from 'rsuite/Button';
import Col from 'rsuite/Col';
import Grid from 'rsuite/Grid';
import Loader from 'rsuite/Loader';
import Panel from 'rsuite/Panel';
import Row from 'rsuite/Row';
import { UserContext } from './App';

const userType = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

function sp(count) { return `submission${count !== 1 ? 's' : ''}`; }

function CurrentUser({ user }) {
  const { count } = user;
  if (count) {
    return (
      <div>
        <p>{`You've completed ${count} ${sp(count)} today!`}</p>
        <Link to="/submissions">
          <Button appearance="primary">See mine</Button>
        </Link>
        <Link to="/submissions/new">
          <Button appearance="default">Submit more?</Button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <p>{`You haven't completed any ${sp(0)} today!`}</p>
      <Link to="/submissions/new">
        <Button appearance="primary">{'Let\'s fix that!'}</Button>
      </Link>
    </div>
  );
}
CurrentUser.propTypes = { user: userType.isRequired };

function OtherUser({ user }) {
  const { name, id, count } = user;
  return (
    <div>
      <p>{`${name} has completed ${count} ${sp(count)} today.`}</p>
      <Link to={`/submissions?user=${id}`}>
        <Button appearance="primary">{`See ${name}'s submissions`}</Button>
      </Link>
    </div>
  );
}
OtherUser.propTypes = { user: userType.isRequired };

function generateOtherUser(user) {
  return (
    <Row key={user.id}>
      <Col xs={24} md={16} mdOffset={4}>
        <Panel shaded key={user.id}>
          <OtherUser user={user} />
        </Panel>
      </Col>
    </Row>
  );
}
generateOtherUser.propTypes = userType;

export default function Welcome() {
  const currentUser = useContext(UserContext);
  const [counts, setCounts] = useState([]);
  const currentUserCount = counts.find((c) => c.id === currentUser.id) || {};
  const otherUserCounts = counts.filter((c) => c.id !== currentUser.id);

  useEffect(() => {
    fetch('/api/v1/submissions/today_counts').then((p) => p.json()).then(setCounts);
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
          <For each="user" of={otherUserCounts} body={generateOtherUser} />
        </Grid>
      </When>
      <When condition={counts.length === 0}>
        <Loader size="lg" />
      </When>
    </Choose>
  );
}
