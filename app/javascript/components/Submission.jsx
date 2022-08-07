import React from 'react';
import PropTypes from 'prop-types';

export default function Submission({ submission }) {
  const { /*id,*/ prompt, response } = submission;
  return (
    <div>
      <dl>
        <dt>Prompt</dt>
        <dd>{prompt}</dd>
        <dt>Response</dt>
        <dd>{response}</dd>
      </dl>
    </div>
  );
}

Submission.propTypes = {
  submission: PropTypes.shape({
    id: PropTypes.number,
    prompt: PropTypes.string,
    response: PropTypes.string,
  }),
};
