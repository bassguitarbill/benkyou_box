import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { UserContext } from './App';

export default function User() {
  const user = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [japaneseName, setJapaneseName] = useState(user.japanese_name);
  const [email, setEmail] = useState(user.email);

  const [discordUsername, setDiscordUsername] = useState(user.discord_username);
  const [discordId, setDiscordId] = useState(user.discord_id);
  const [discordDiscriminator, setDiscordDiscriminator] = useState(user.discord_discriminator);

  const [discordReminders, setDiscordReminders] = useState(user.discord_reminders);

  function setField(setter) {
    return function(event) {
      setter(event.target.value);
    }
  }

  function setBoolean(setter) {
    return function(event) {
      setter(event.target.checked);
    }
  }

  return (
    <div>
      <TextField key="name" name="name" value={name} setter={setField(setName)} />
      <TextField key="japaneseName" name="japaneseName" value={japaneseName} setter={setField(setJapaneseName)} />
      <TextField key="email" name="email" value={email} setter={setField(setEmail)} />
      <TextField key="discordUsername" name="discordUsername" value={discordUsername} setter={setField(setDiscordUsername)} />
      <TextField key="discordId" name="discordId" value={discordId} setter={setField(setDiscordId)} />
      <TextField key="discordDiscriminator" name="discordDiscriminator" value={discordDiscriminator} setter={setField(setDiscordDiscriminator)} />
      <div><label htmlFor="discordReminders">Discord Reminders:</label><input name="discordReminders" type="checkbox" onChange={setBoolean(setDiscordReminders)} checked={discordReminders} /></div>
    </div>
  );
}

// change "name" to "Name: "
// change "discordUsername" to "Discord Username: "
function formatLabel(name) {
  return name.split('').reduce((acc, c, i) => {
    if (c === c.toUpperCase()) {
      acc.push([c])
    } else {
      acc[acc.length - 1].push(i === 0 ? c.toUpperCase() : c)
    };
    return acc;
  }, [[]]).map(a => a.join('')).join(' ').concat(': ');
}

function TextField({ name, value, setter }) {
  return (
    <div>
      <label htmlFor={name}>{formatLabel(name)}</label>
      <input name={name} onChange={setter} value={value} />
    </div>
  );
}

