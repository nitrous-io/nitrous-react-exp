import './NitrousIDE.sass';
import React from 'react';
import MainMenu from './MainMenu';
import Sidebar from './Sidebar';
import PaneContainer from '../containers/PaneContainer';

function NitrousIDE() {
  return (
    <div className='NitrousIDE'>
      <MainMenu />
      <main>
        <Sidebar />
        <PaneContainer paneID='0' />
      </main>
    </div>
  );
}

export default NitrousIDE;
