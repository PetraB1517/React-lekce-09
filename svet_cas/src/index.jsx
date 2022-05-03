import React from 'react';
import { render } from 'react-dom';
import './style.css';
import WorldTime from './components/WorldTime';

const App = () => (
  <>
    <div className="container">
      <WorldTime/>
	  </div>
  </>
);

render(<App />, document.querySelector('#app'));