import './TabBar.sass';
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
  return (
    <div className='TabBar'>
      <ul>
        {tabs ? tabs.map((tab, id) => (
          <li key={`tab-${id}`} className={classNames({selected: selectedTabID === id})} onClick={() => onClickTab(id)}>
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
  selectedTabID: PropTypes.string,
  onClickNewTab: PropTypes.func.isRequired,
  onClickCloseTab: PropTypes.func.isRequired,
  onClickTab: PropTypes.func.isRequired
};

export default TabBar;
