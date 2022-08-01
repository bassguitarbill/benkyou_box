//document.querySelectorAll('.addNewButton').forEach(b => b.addEventListener('click', e => {
const indices = {}
function addFields(column) {
  //const column = e.target.id.split('-')[2];
  if (indices.hasOwnProperty(column)) {
    indices[column] ++;
  } else {
    indices[column] = 0;
  }
  const index = indices[column];

  const li = document.createElement('li');
  const contentInput = document.createElement('input');
  contentInput.setAttribute('data-column', column);
  contentInput.setAttribute('data-type', 'content');
  contentInput.setAttribute('name', `${column}-content-${index}`);

  const weightInput = document.createElement('input');
  weightInput.setAttribute('data-column', column);
  weightInput.setAttribute('data-type', 'weight');
  weightInput.setAttribute('name', `${column}-weight-${index}`);
  
  li.appendChild(contentInput);
  li.appendChild(weightInput);
  document.querySelector(`#${column}-list`).appendChild(li);
}//));

/*
document.querySelector('#submit-prompts').addEventListener('click', () => {
  const newEntries = Array.from(document.querySelectorAll('.promptColumn')).reduce(findNewPromptEntries, {});
  const csrfToken = document.querySelector('meta[name=csrf-token]').getAttribute('content');
  const body = { authenticity_token: csrfToken, newEntries }
  fetch('/prompts/add_new', {
    method: 'POST',
    body: JSON.stringify(body),

  }).then(() => location.reload());
});
*/
function findNewPromptEntries(acc, n) {
  const column = n.id.split('-')[0]

  acc[column] = [];
  const fields = Array.from(document.querySelectorAll(`[data-column=${column}]`));
  for (let i = 0; i < fields.length; i+= 2) {
    const content = fields[i].value;
    const weight = fields[i + 1].value || "1";
    acc[column].push({ content, weight });
  }
    
  return acc;
}

window.addFields = addFields;
