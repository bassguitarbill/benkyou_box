import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function PromptEntry({ entry, onModify }){
  const { id, content, weight } = entry;
  return (
    <div>
      <input onChange={onModify.bind(null, 'content')} value={content} />
      <input onChange={onModify.bind(null, 'weight')} value={weight} />
    </div>
  );
}

function PromptColumn({ name, entries, addEntry, modifyEntry }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', }}>
      <For each="entry" of={entries}>
        <PromptEntry entry={entry} key={entry.id} onModify={modifyEntry.bind(null, entry.id)} />
      </For>
      <button onClick={addEntry}>Add Entry</button>
    </div>
  );
}


export default function Prompts() {
  const [lengths, setLengths] = useState([]);
  const [topics, setTopics] = useState([]);
  const [grammars, setGrammars] = useState([]);
  const [shouldReload, setShouldReload] = useState(false);

  function addEntry(column, columnSetter) {
    return function() {
      const id = column.reduce((max, e) => Math.max(e.id, max), 0) + 1;
      columnSetter(column.concat({ id, content: '', weight: 1 }));
    }
  }

  function modifyEntry(column, setColumn) {
    return function(entryId, attribute, ev) {
      const entryIndex = column.findIndex(e => e.id === entryId);
      const entry = column[entryIndex];
      const newEntry = Object.assign({}, entry);
      newEntry[attribute] = ev.target.value;

      const newColumn = column.map(e => e);
      newColumn.splice(entryIndex, 1, newEntry);
      setColumn(newColumn);
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
    }).then(() => setShouldReload(true));
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '80%'}}>
        <PromptColumn
          name="lengths"
          entries={lengths}
          addEntry={addEntry(lengths, setLengths)}
          modifyEntry={modifyEntry(lengths, setLengths)}
        />
        <PromptColumn
          name="topics"
          entries={topics}
          addEntry={addEntry(topics, setTopics)}
          modifyEntry={modifyEntry(topics, setTopics)}
        />
        <PromptColumn
          name="grammars"
          entries={grammars}
          addEntry={addEntry(grammars, setGrammars)}
          modifyEntry={modifyEntry(grammars, setGrammars)}
        />
      </div>
      <button onClick={submit}>Submit</button>
    </>
  );
}
