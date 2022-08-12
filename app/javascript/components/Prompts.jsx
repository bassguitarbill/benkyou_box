import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from 'rsuite/Button';
import Col from 'rsuite/Col';
import FlexboxGrid from 'rsuite/FlexboxGrid';
import Notification from 'rsuite/Notification';

import { useToaster } from 'rsuite';

function PromptEntry({ entry, onModify }){
  const { content, weight } = entry;
  return (
    <tr>
      <td>
        <input onChange={onModify.bind(null, 'content')} value={content} />
      </td>
      <td>
        <input onChange={onModify.bind(null, 'weight')} value={weight} />
      </td>
    </tr>
  );
}

function PromptCol({ name, entries, addEntry, modifyEntry }) {
  return (
    <FlexboxGrid.Item key={name} as={Col} md={8} xs={24}>
      <div className="prompt-col">
        <h4 className="prompt-col-header">{name}</h4>
        <table className="prompt-col-table" data={entries}>
          <thead>
            <tr>
              <th>Content</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            <For each="entry" of={entries}>
              <PromptEntry key={entry.id} entry={entry} onModify={modifyEntry.bind(null, entry.id)} />
            </For>
          </tbody>
        </table>
        <Button className="prompt-col-add-entry-button" onClick={addEntry}>Add Entry</Button>
      </div>
    </FlexboxGrid.Item>
  );
}


export default function Prompts() {
  const [lengths, setLengths] = useState([]);
  const [topics, setTopics] = useState([]);
  const [grammars, setGrammars] = useState([]);
  const [shouldReload, setShouldReload] = useState(false);
  const toaster = useToaster();

  function addEntry(col, colSetter) {
    return function() {
      const id = lengths.concat(topics).concat(grammars).reduce((max, e) => Math.max(e.id, max), 0) + 1;
      colSetter(col.concat({ id, content: '', weight: 1, category: col[0].category }));
    }
  }

  function modifyEntry(col, setCol) {
    return function(entryId, attribute, ev) {
      const entryIndex = col.findIndex(e => e.id === entryId);
      const entry = col[entryIndex];
      const newEntry = Object.assign({}, entry);
      newEntry[attribute] = ev.target.value;

      const newCol = col.map(e => e);
      newCol.splice(entryIndex, 1, newEntry);
      setCol(newCol);
    }
  }

  useEffect(() => {
    fetch('/api/v1/prompts/fetch').then(r => r.json()).then(r => {
      const { lengths, topics, grammars } = r;
      setLengths(lengths);
      setTopics(topics);
      setGrammars(grammars);
    }).then(() => setShouldReload(false));
  }, [shouldReload]);

  const submit = () => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').content
    fetch('/api/v1/prompts/update', {
      method: 'PUT',
      body: JSON.stringify({
        lengths,
        topics,
        grammars
      }),
      headers: {
        'X-CSRF-Token': csrfToken,
      },
    }).then(() => setShouldReload(true)
    ).then(() => toaster.push(submitMessage, { placement: 'bottomCenter' })
    ).then(() => setTimeout(() => toaster.clear(), 3000));
  };

  const submitMessage = (
    <Notification type="success" header="Successfully saved prompts"/>
  );

  return (
    <>
      <FlexboxGrid>
          <PromptCol
            name="lengths"
            entries={lengths}
            addEntry={addEntry(lengths, setLengths)}
            modifyEntry={modifyEntry(lengths, setLengths)}
          />
          <PromptCol
            name="topics"
            entries={topics}
            addEntry={addEntry(topics, setTopics)}
            modifyEntry={modifyEntry(topics, setTopics)}
          />
          <PromptCol
            name="grammars"
            entries={grammars}
            addEntry={addEntry(grammars, setGrammars)}
            modifyEntry={modifyEntry(grammars, setGrammars)}
          />
      </FlexboxGrid>
      <Col xs={24}><Button color="green" appearance="primary" onClick={submit}>Submit</Button></Col>
    </>
  );
}
