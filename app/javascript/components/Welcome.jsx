import React from 'react';
import { UserContext } from './App';

function CurrentUserVerbiage({ user }) {
  const { count } = user;
  if (count) {
    return (
      <div>
        <p>{`You've completed ${count} submission${count > 1 ? 's' : ''} today!`}</p>
        <a href="/submissions/new">{"Submit more?"}</a>
      </div>
    );
  } else {
    return (
      <div>
        <p>{`You haven't completed any submissions today!`}</p>
        <a href="/submissions/new">{"Let's fix that!"}</a>
      </div>
    );
  }
}

function OtherUserVerbiage({ name, count }) {
  return <p>{`${name} has completed ${count} submission${count != 1 ? 's' : ''} today.`}</p>
}

export default function Welcome() {
  const currentUser = React.useContext(UserContext);
  const [counts, setCounts] = React.useState([]);
  const currentUserCount = counts.find(c => c.id === currentUser.id) || {}
  const otherUserCounts = counts.filter(c => c.id !== currentUser.id)

  React.useEffect(() => {
    fetch('/api/v1/submissions/today_counts').then(p => p.json()).then(setCounts)
  }, []);

  return (
    <If condition={true}>
      <CurrentUserVerbiage user={currentUserCount} />
      <For each='user' of={ otherUserCounts }>
        <OtherUserVerbiage name={user.name} count={user.count} />
      </For>
    </If>
  );
}
