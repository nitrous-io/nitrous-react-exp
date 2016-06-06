import './TabBar.sass';
import React, {PropTypes} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {Button} from 'react-bootstrap';
import Tab from '../records/Tab';

function TabBar({
  tabs,
  onClickNewTab,
  onClickCloseTab
}) {
  return (
    <div className='TabBar'>
      <ul>
        {tabs ? tabs.map((tab, id) => (
          <li key={`tab-${id}`}>
            {tab.title}
            <Button bsStyle='link' onClick={() => onClickCloseTab(id)}>
              <i className='fa fa-times' />
            </Button>
          </li>
        )).toList() : ''}
      </ul>
      <Button onClick={onClickNewTab}>New Tab</Button>
    </div>
  );
}

TabBar.propTypes = {
  tabs: ImmutablePropTypes.orderedMapOf(Tab).isRequired,
  onClickNewTab: PropTypes.func.isRequired,
  onClickCloseTab: PropTypes.func.isRequired
};

export default TabBar;
