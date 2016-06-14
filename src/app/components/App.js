import '../css/App.sass';
import React from 'react';
import {Provider} from 'react-redux';
import NitrousIDE from './NitrousIDE';
import store from '../store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <NitrousIDE />
      </div>
    </Provider>
  );
}

export default App;
