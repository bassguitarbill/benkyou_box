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
      <div><label htmlFor="name">Name:</label><input name="name" onChange={setField(setName)} value={name} /></div>
      <div><label htmlFor="japaneseName">Japanese Name:</label><input name="japaneseName" onChange={setField(setJapaneseName)} value={japaneseName} /></div>
      <div><label htmlFor="email">Email Address:</label><input name="email" onChange={setField(setEmail)} value={email} /></div>
      <div><label htmlFor="discordUsername">Discord Username:</label><input name="discordUsername" onChange={setField(setDiscordUsername)} value={discordUsername} /></div>
      <div><label htmlFor="discordId">Discord Id:</label><input name="discordId" onChange={setField(setDiscordId)} value={discordId} /></div>
      <div><label htmlFor="discordDiscriminator">Discord Discriminator:</label><input name="discordDiscriminator" onChange={setField(setDiscordDiscriminator)} value={discordDiscriminator} /></div>
      <div><label htmlFor="discordReminders">Discord Reminders:</label><input name="discordReminders" type="checkbox" onChange={setBoolean(setDiscordReminders)} checked={discordReminders} /></div>
    </div>
  );
}
