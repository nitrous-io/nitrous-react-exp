import '../css/PaneView.sass';
import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import TabBarContainer from '../containers/TabBarContainer';
import TabContentsContainer from '../containers/TabContentsContainer';
import Pane from '../records/Pane';
import PaneContainer from '../containers/PaneContainer';
import classNames from 'classnames';

function PaneView({
  paneID,
  pane,
  onClickSplitHorizontally,
  onClickSplitVertically,
  onClickUnsplit
}) {
  const leaf = !pane.leftChildID && !pane.rightChildID;

  return (
    <div className={classNames('PaneView', { vertical: pane.vertical, leaf })}>
      {pane.leftChildID ? (
        <PaneContainer paneID={pane.leftChildID} />
      ) : ''}
      {pane.rightChildID ? (
        <PaneContainer paneID={pane.rightChildID} />
      ) : ''}
      {leaf ? (
        <div className='pane-body'>
          <header>
            {pane.tabListID ? (
              <TabBarContainer tabListID={pane.tabListID} paneID={paneID} />
            ) : ''}
            <div className='pane-controls'>
              <Button className='panel-btn' bsStyle='link' onClick={onClickSplitHorizontally} title='Split Horizontally'>
                <i className='fa fa-columns' />
              </Button>
              <Button className='panel-btn' bsStyle='link' onClick={onClickSplitVertically} title='Split Vertically'>
                <i className='fa fa-columns fa-rotate-270' />
              </Button>
              {pane.parentID ? (
                <Button className='panel-btn' bsStyle='link' onClick={onClickUnsplit} title='Unsplit'>
                  <i className='fa fa-times' />
                </Button>
              ) : ''}
            </div>
          </header>
          <TabContentsContainer tabListID={pane.tabListID} paneID={paneID} />
        </div>
      ) : ''}
    </div>
  );
}

PaneView.propTypes = {
  paneID: PropTypes.string.isRequired,
  pane: PropTypes.instanceOf(Pane).isRequired,
  onClickSplitHorizontally: PropTypes.func.isRequired,
  onClickSplitVertically: PropTypes.func.isRequired,
  onClickUnsplit: PropTypes.func.isRequired
};

export default PaneView;
