import './NitrousIDE.sass';
import React from 'react';
import MainMenu from './MainMenu';
import Sidebar from './Sidebar';
import TabbedPane from './TabbedPane';

const klass = class NitrousIDE extends React.Component {
  render() {
    return (
      <div className='NitrousIDE'>
        <MainMenu />
        <main>
          <Sidebar />
          <TabbedPane className='root-pane' />
        </main>
      </div>
    );
  }
};

export default klass;
