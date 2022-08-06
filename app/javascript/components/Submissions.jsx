import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from "luxon";

import { Link } from 'react-router-dom';

import { useQuery } from '../util';

function getCurrentDate() {
  return DateTime.now().startOf('day');
}
function getDate(params) {
  if (!params.date) return getCurrentDate();
  return DateTime.fromISO(params.date);
}

export default function Submissions() {
  const query = useQuery();
  const props = {date: query.get('date')};
  const date = getDate(props);
  const yesterday = date.plus({ days: -1 }).toISODate();
  const tomorrow = date.plus({ days: 1 }).toISODate();
  return (
    <>
      <p>{date.toISODate()}</p>
      <Link to={`/submissions?date=${yesterday}`}>Yesterday</Link>
      <If condition={date.toISODate() !== getCurrentDate().toISODate()}>
        <Link to={`/submissions?date=${tomorrow}`}>Tomorrow</Link>
      </If>
    </>
  );
}
