import './App.sass';
import React from 'react';
import NitrousIDE from './NitrousIDE';

const klass = class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <NitrousIDE />
      </div>
    );
  }
};

