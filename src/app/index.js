import React from 'react';
import { render } from 'react-dom';

const rootElement = document.getElementById('root');

class App extends React.Component {
  render () {
    return <p> Hello React project</p>;
  }
}

render(<App />, rootElement);
