function generatePrompt() {
  const path = '/api/v1/prompts/generate';
  fetch(path).then(d => d.json()).then(p => {
    const { length, topic, grammar } = p;
    document.querySelector('#submission_prompt').textContent = `Write ${length} about ${topic} using ${grammar}`;
  });
}

document.querySelector('#generate_button').addEventListener('click', () => generatePrompt());


