import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Button from 'rsuite/Button';
import Divider from 'rsuite/Divider';
import Input from 'rsuite/Input';

function generatePrompt({ length, topic, grammar }) {
  return `Write ${length} about ${topic} using ${grammar}`;
}

export default function NewSubmission() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const fetchPrompt = useCallback(() => {
    fetch('/api/v1/prompts/generate').then(rsp => rsp.json()).then(rsp => setPrompt(generatePrompt(rsp)));
  }, []);

  const handlePromptInput = e => {
    setPrompt(e.target.value)
  };

  const handleResponseInput = e => {
    setResponse(e.target.value)
  };

  const submit = () => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').content
    fetch('/api/v1/submissions/submit', {
      method: 'POST',
      body: JSON.stringify({
        prompt,
        response,
      }),
      headers: {
        'X-CSRF-Token': csrfToken,
      },
    }).then(() => setShouldRedirect(true));
  };

  return (
    <div className="new-submission">
      <If condition={shouldRedirect}>
        <Redirect to="/submissions" />
      </If>
      <Button size="sm" onClick={fetchPrompt}>Generate Prompt</Button>
      <Divider />
      <Input className="new-submission-input" value={prompt} as="textarea" rows={3} placeholder="Prompt" onChange={handlePromptInput} />
      <Divider />
      <Input className="new-submission-input" value={response} as="textarea" rows={3} placeholder="Response" onChange={handleResponseInput} />
      <Divider />
      <Button appearance="primary" onClick={submit}>Submit</Button>
    </div>
  );
}
