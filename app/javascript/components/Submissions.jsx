import React, { useContext, useEffect, useState } from 'react';
import { DateTime } from "luxon";
import { Link } from 'react-router-dom';

import { UserContext } from './App';
import { useQuery } from '../util';

function getCurrentDate() {
  return DateTime.now().startOf('day');
}
function getDate(props) {
  if (!props.date) return getCurrentDate();
  return DateTime.fromISO(props.date);
}

function getUser(props) {
  if (!props.user) return useContext(UserContext);
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
      <p>{date.toISODate()}</p>
      <Link to={`/submissions?date=${yesterday}&user=${userId}`}>Yesterday</Link>
      <If condition={date.toISODate() !== getCurrentDate().toISODate()}>
        <Link to={`/submissions?date=${tomorrow}&user=${userId}`}>Tomorrow</Link>
      </If>
      <p>{JSON.stringify(submissions)}</p>
    </>
  );
}
