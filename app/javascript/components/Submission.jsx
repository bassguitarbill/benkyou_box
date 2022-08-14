import React, { useState, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';

import Button from 'rsuite/Button';

import UserContext from './UserContext';

export default function Submission({ submission }) {
  const { /* id, */ prompt, response, translations } = submission;
  const currentUser = useContext(UserContext);

  const [showOwnerTranslation, setShowOwnerTranslation] = useState(false);
  const ownerTranslation = translations.find((t) => t.user_id === submission.user_id);

  const isOwner = submission.user_id === currentUser.id;

  const toggleShowOwnerTranslation = useCallback(
    () => setShowOwnerTranslation(!showOwnerTranslation),
  );

  const showHideTranslations = `${showOwnerTranslation ? 'Hide' : 'Show'} Translations`;

  return (
    <div>
      <dl>
        <dt>Prompt</dt>
        <dd>{prompt}</dd>
        <dt>Response</dt>
        <dd>{response}</dd>
        <Choose>
          <When condition={isOwner}>
            <If condition={!!ownerTranslation}>
              <dt>Translation</dt>
              <dd>{ownerTranslation.content}</dd>
            </If>
          </When>
          <When condition={!isOwner}>
            <If condition={!!ownerTranslation}>
              <If condition={showOwnerTranslation}>
                <dt>Translation</dt>
                <dd>{ownerTranslation.content}</dd>
              </If>
              <Button appearance="link" onClick={toggleShowOwnerTranslation}>{showHideTranslations}</Button>
            </If>
          </When>
        </Choose>
      </dl>
    </div>
  );
}

Submission.propTypes = {
  submission: PropTypes.shape({
    id: PropTypes.number,
    prompt: PropTypes.string,
    response: PropTypes.string,
    translations: PropTypes.arrayOf(PropTypes.string.isRequired),
    user_id: PropTypes.number.isRequired,
  }).isRequired,
  owner: PropTypes.shape({

  }).isRequired,
};
