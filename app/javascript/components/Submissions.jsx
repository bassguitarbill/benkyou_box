import React, { useContext, useEffect, useState } from 'react';

import DatePicker from 'rsuite/DatePicker';
import List from 'rsuite/List';

import { UserContext } from './App';
import Submission from './Submission';
import { useQuery } from '../util';

export default function Submissions() {
  const [submissions, setSubmissions] = useState({ user: null, submissions: []});
  const [date, setDate] = useState(new Date());

  const currentUser = useContext(UserContext);
  const userId = useQuery().get('user') || currentUser.id;
  const userName = submissions.user?.name;

  useEffect(() => {
    fetch(`/api/v1/submissions/daily?date=${date}&user=${userId}`).then(rsp => rsp.json()).then(rsp => setSubmissions(rsp));
  }, [userId, date]);

  return (
    <div className="submissions">
      <h2 className="submissions-header">{`${userName}'s Submissions`}</h2>
      <DatePicker className="submissions-date-picker" value={new Date(date)} onChange={setDate}></DatePicker>
      <List>
        <For each='submission' of={submissions.submissions}>
          <List.Item key={submission.id}><Submission submission={submission} /></List.Item>
        </For>
      </List>
    </div>
  );
}
