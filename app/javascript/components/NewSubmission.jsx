import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

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
        authenticity_token: csrfToken,
      }),
    }).then(() => setShouldRedirect(true));
  };

  return (
    <div>
      <If condition={shouldRedirect}>
        <Redirect to="/submissions" />
      </If>
      <div>
        <button onClick={fetchPrompt}>Generate Prompt</button>
      </div>
      <div>
        <textarea value={prompt} onChange={handlePromptInput} />
      </div>
      <div>
        <textarea value={response} onChange={handleResponseInput} />
      </div>
      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}
