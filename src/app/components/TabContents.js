import '../css/TabContents.sass';
import React, {PropTypes} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames';
import Tab from '../records/Tab';
import CodeMirrorView from './CodeMirrorView';

function TabContents({
  tabs,
  selectedTabID
}) {
  return (
    <div className='TabContents'>
      {tabs ? tabs.map((tab, id) => (
        <div key={`tab-content-${id}`} className={classNames('tab-content', {active: selectedTabID === id })}>
          <CodeMirrorView />
        </div>
      )).toList() : ''}
    </div>
  );
}

TabContents.propTypes = {
  tabs: ImmutablePropTypes.orderedMapOf(Tab).isRequired,
  selectedTabID: PropTypes.string
};

export default TabContents;
