import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './App';

import Button from 'react-bootstrap/button';
import Card from 'react-bootstrap/card';

function sp(count) { return `submission${count != 1 ? 's' : ''}`; }

function CurrentUser({ user }) {
  const { count } = user;
  if (count) {
    return (
      <div>
        <p>{`You've completed ${count} ${sp(count)} today!`}</p>
        
        <Link to="/submissions">
          <Button variant="primary">{'See mine'}</Button>
        </Link>
        <Link to="/submissions/new">
          <Button variant="secondary">{'Submit more?'}</Button>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <p>{`You haven't completed any ${sp(0)} today!`}</p>
        <Link to="/submissions/new">
          <Button variant="primary">{'Let\'s fix that!'}</Button>
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
        <Button variant="primary">{`See ${name}'s submissions`}</Button>
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
    <>
      <Card body>
        <CurrentUser user={currentUserCount} />
      </Card>
      <For each='user' of={ otherUserCounts }>
        <Card body>
          <OtherUser key={user.id} id={user.id} name={user.name} count={user.count} />
        </Card>
      </For>
      <Link to="/prompts">Manage Prompts</Link>
    </>
  );
}
