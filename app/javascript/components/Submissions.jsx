import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';

import Button from 'rsuite/Button';
import DatePicker from 'rsuite/DatePicker';
import List from 'rsuite/List';

import PageNext from '@rsuite/icons/PageNext';
import PagePrevious from '@rsuite/icons/PagePrevious';
import UserContext from './UserContext';
import Submission from './Submission';
import { useQuery } from '../util';

function generateSubmission(submission) {
  return (
    <List.Item key={submission.id}>
      <Submission submission={submission} />
    </List.Item>
  );
}
export default function Submissions() {
  const [submissions, setSubmissions] = useState({ user: null, submissions: [] });
  const [date, setDate] = useState(new Date());

  const currentUser = useContext(UserContext);
  const userId = useQuery().get('user') || currentUser.id;
  const userName = submissions.user?.name;

  const previousDay = useCallback(() => {
    const d = new Date(date);
    d.setDate(d.getDate() - 1);
    setDate(d);
  });

  const nextDay = useCallback(() => {
    const d = new Date(date);
    d.setDate(d.getDate() + 1);
    setDate(d);
  });

  useEffect(() => {
    fetch(`/api/v1/submissions/daily?date=${date}&user=${userId}`).then((rsp) => rsp.json()).then((rsp) => setSubmissions(rsp));
  }, [userId, date]);

  return (
    <div className="submissions">
      <h2 className="submissions-header">{`${userName}'s Submissions`}</h2>
      <div>
        <Button appearance="link" onClick={previousDay}><PagePrevious style={{ fontSize: '3em' }} /></Button>
        <DatePicker className="submissions-date-picker" value={new Date(date)} onChange={setDate} />
        <Button appearance="link" onClick={nextDay}><PageNext style={{ fontSize: '3em' }} /></Button>
      </div>
      <List>
        <For each="submission" of={submissions.submissions} body={generateSubmission} />
      </List>
    </div>
  );
}
