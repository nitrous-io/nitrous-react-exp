import React from 'react';
import {render} from 'react-dom';

import Nitrous from './Nitrous.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <Nitrous />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
