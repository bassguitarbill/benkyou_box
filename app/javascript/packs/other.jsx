import React from 'react'
import { render } from 'react-dom';
//import PropTypes from 'prop-types'
import Other from '../components/Other';

document.addEventListener("DOMContentLoaded", () => {
  render(<Other />, document.body.appendChild(document.createElement('div')));
});

