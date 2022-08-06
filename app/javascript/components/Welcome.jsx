import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './App';

function sp(count) { return `submission${count != 1 ? 's' : ''}`; }

function CurrentUser({ user }) {
  const { count } = user;
  if (count) {
    return (
      <div>
        <p>{`You've completed ${count} ${sp(count)} today!`}</p>
        <Link to="/submissions">{'Submit more?'}</Link>
      </div>
    );
  } else {
    return (
      <div>
        <p>{`You haven't completed any ${sp(0)} today!`}</p>
        <Link to="/submissions">{'Let\'s fix that!'}</Link>
      </div>
    );
  }
}

function OtherUser({ name, count }) {
  return <p>{`${name} has completed ${count} ${sp(count)} today.`}</p>
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
    <If condition={true}>
      <CurrentUser user={currentUserCount} />
      <For each='user' of={ otherUserCounts }>
        <OtherUser key={user.id} name={user.name} count={user.count} />
      </For>
    </If>
  );
}
