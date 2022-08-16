import React, { useState, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';

import Button from 'rsuite/Button';
import Input from 'rsuite/Input';
import IconButton from 'rsuite/IconButton';
import CheckOutlineIcon from '@rsuite/icons/CheckOutline';
import PlusIcon from '@rsuite/icons/Plus';

import UserContext from './UserContext';

function split(str) {
  return (
    <div>
      { str.split('\n').map(l => <><span>{l}</span><br /></>) }
    </div>
  );
}

export default function Submission({ submission, shouldReload }) {
  const {
    id,
    prompt,
    response,
    translations,
  } = submission;
  const currentUser = useContext(UserContext);

  const [showOwnerTranslation, setShowOwnerTranslation] = useState(false);
  const [editableTranslation, setEditableTranslation] = useState('');
  const [showEditTranslation, setShowEditTranslation] = useState(false);
  const toggleShowEditTranslation = useCallback(() => {
    setShowEditTranslation(!showEditTranslation);
  });
  const ownerTranslation = translations.find((t) => t.user_id === submission.user_id);

  const isOwner = submission.user_id === currentUser.id;

  const toggleShowOwnerTranslation = useCallback(
    () => setShowOwnerTranslation(!showOwnerTranslation),
  );

  const showHideTranslations = `${showOwnerTranslation ? 'Hide' : 'Show'} Translation`;

  const saveEditableTranslation = () => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
    fetch('/api/v1/translations/update', {
      method: 'put',
      body: JSON.stringify({
        userId: currentUser.id,
        submissionId: id,
        content: editableTranslation,
      }),
      headers: {
        'X-CSRF-Token': csrfToken,
      },
    }).then(() => shouldReload(true));
  };

  return (
    <div>
      <dl>
        <dt>Prompt</dt>
        <dd>{prompt}</dd>
        <dt>Response</dt>
        <dd>{split(response)}</dd>
        <Choose>
          <When condition={isOwner}>
            <If condition={!ownerTranslation}>
              <If condition={showEditTranslation}>
                <Input as="textarea" value={editableTranslation} onChange={setEditableTranslation} />
                <IconButton icon={<CheckOutlineIcon />} onClick={saveEditableTranslation}>
                  Save Translation
                </IconButton>
              </If>
              <If condition={!showEditTranslation}>
                <IconButton icon={<PlusIcon />} onClick={toggleShowEditTranslation}>
                  Add Translation
                </IconButton>
              </If>
            </If>
            <If condition={!!ownerTranslation}>
              <dt>Translation</dt>
              <dd>{split(ownerTranslation.content)}</dd>
            </If>
          </When>
          <When condition={!isOwner}>
            <If condition={!!ownerTranslation}>
              <If condition={showOwnerTranslation}>
                <dt>Translation</dt>
                <dd>{split(ownerTranslation.content)}</dd>
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
