import React, { useContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from 'rsuite/Button';
import Form from 'rsuite/Form';
import Input from 'rsuite/Input';
import Toggle from 'rsuite/Toggle';

import UserContext from './UserContext';

export default function User() {
  const user = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [japaneseName, setJapaneseName] = useState(user.japanese_name);
  const [email, setEmail] = useState(user.email);

  const [discordUsername, setDiscordUsername] = useState(user.discord_username || '');
  const [discordId, setDiscordId] = useState(user.discord_id || '');
  const [discordDiscriminator, setDiscordDiscriminator] = useState(user.discord_discriminator || '');

  const [discordReminders, setDiscordReminders] = useState(user.discord_reminders);

  function setField(setter) {
    return (value) => {
      setter(value);
    };
  }

  const submit = useCallback(() => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
    fetch('/api/v1/users/update', {
      method: 'PUT',
      body: JSON.stringify({
        name,
        japaneseName,
        email,
        discordUsername,
        discordId,
        discordDiscriminator,
        discordReminders,
      }),
      headers: {
        'X-CSRF-Token': csrfToken,
      },
    }).then(() => window.location.reload());
  });

  return (
    <div>
      <TextField key="name" name="name" value={name} setter={setField(setName)} />
      <TextField key="japaneseName" name="japaneseName" value={japaneseName} setter={setField(setJapaneseName)} />
      <TextField key="email" name="email" value={email} setter={setField(setEmail)} />
      <TextField key="discordUsername" name="discordUsername" value={discordUsername} setter={setField(setDiscordUsername)} />
      <TextField key="discordId" name="discordId" value={discordId} setter={setField(setDiscordId)} />
      <TextField key="discordDiscriminator" name="discordDiscriminator" value={discordDiscriminator} setter={setField(setDiscordDiscriminator)} />
      <Form.Group>
        <label htmlFor="discordReminders">Discord Reminders: </label>
        <Toggle id="discordReminders" name="discordReminders" onChange={setField(setDiscordReminders)} checked={discordReminders} />
      </Form.Group>
      <Button appearance="primary" onClick={submit}>Submit</Button>
    </div>
  );
}

// change "name" to "Name: "
// change "discordUsername" to "Discord Username: "
function formatLabel(name) {
  return name.split('').reduce((acc, c, i) => {
    if (c === c.toUpperCase()) {
      acc.push([c]);
    } else {
      acc[acc.length - 1].push(i === 0 ? c.toUpperCase() : c);
    }
    return acc;
  }, [[]]).map((a) => a.join('')).join(' ')
    .concat(': ');
}

function TextField({ name, value, setter }) {
  const email = name === 'email';
  return (
    <Form.Group>
      <label htmlFor={name}>{formatLabel(name)}</label>
      <Input name={name} onChange={setter} value={value} type={email ? 'email' : 'text'} />
    </Form.Group>
  );
}
TextField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setter: PropTypes.func.isRequired,
};
