import React, { useState } from 'react';

export default function(_props) {
  const [counter, setCounter] = useState(0);
  return (
    <>
    <h1>No Way! No Way! No Way!</h1>
    <p>どういたしまして</p>
    <p>{counter}</p>
    <button onClick={setCounter.bind(null, counter + 1)}>Enhance!</button>
    <a href="/other">Let's go</a>
    </>
  );
}
