import '../css/TabBar.sass';
import React, {PropTypes} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames';
import {Button} from 'react-bootstrap';
import Tab from '../records/Tab';

function TabBar({
  tabs,
  selectedTabID,
  onClickNewTab,
  onClickCloseTab,
  onClickTab
}) {
  const selectTab = (tabID) => ((e) => {
    e.stopPropagation();
    onClickTab(tabID);
  });

  const closeTab = (tabID) => ((e) => {
    e.stopPropagation();
    onClickCloseTab(tabID);
  });

  return (
    <div className='TabBar'>
      <ul>
        {tabs ? tabs.map((tab, id) => (
          <li key={`tab-${id}`} className={classNames({selected: selectedTabID === id})} onClick={selectTab(id)}>
            {tab.title}
            <Button bsStyle='link' onClick={closeTab(id)} title='Close Tab'>
              <i className='fa fa-times' />
            </Button>
          </li>
        )).toList() : ''}
      </ul>
      <Button className='panel-btn' bsStyle='link' onClick={onClickNewTab} title='New Tab'>
        <i className='fa fa-plus' />
      </Button>
    </div>
  );
}

TabBar.propTypes = {
  tabs: ImmutablePropTypes.orderedMapOf(Tab).isRequired,
  selectedTabID: PropTypes.string,
  onClickNewTab: PropTypes.func.isRequired,
  onClickCloseTab: PropTypes.func.isRequired,
  onClickTab: PropTypes.func.isRequired
};

export default TabBar;
