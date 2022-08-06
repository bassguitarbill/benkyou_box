import React, { useContext, useEffect, useState } from 'react';
import { DateTime } from "luxon";
import { Link } from 'react-router-dom';

import { UserContext } from './App';
import Submission from './Submission';
import { useQuery } from '../util';

function getCurrentDate() {
  return DateTime.now().startOf('day');
}
function getDate(props) {
  if (!props.date) return getCurrentDate();
  return DateTime.fromISO(props.date);
}

function getUser(props) {
  if (!props.user) return useContext(UserContext).id;
  return props.user;
}

export default function Submissions() {
  const [submissions, setSubmissions] = useState({ user: null, submissions: []});

  const query = useQuery();
  const props = {date: query.get('date'), user: query.get('user')};

  const date = getDate(props);
  const yesterday = date.plus({ days: -1 }).toISODate();
  const tomorrow = date.plus({ days: 1 }).toISODate();

  const userId = getUser(props);

  useEffect(() => {
    fetch(`/api/v1/submissions/daily?date=${date}&user=${userId}`).then(rsp => rsp.json()).then(rsp => setSubmissions(rsp));
  }, [userId, date.toISODate()]);
  const user = submissions.user;

  return (
    <>
      <p>{user?.name}</p>
      <Link to={`/submissions?date=${yesterday}&user=${userId}`}>Yesterday</Link>
      <span>{date.toISODate()}</span>
      <If condition={date.toISODate() !== getCurrentDate().toISODate()}>
        <Link to={`/submissions?date=${tomorrow}&user=${userId}`}>Tomorrow</Link>
      </If>
      <For each='submission' of={submissions.submissions}>
        <Submission key={submission.id} submission={submission} />
      </For>
    </>
  );
}
