import './PaneView.sass';
import React, {PropTypes} from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import TabBar from './TabBar';
import Pane from '../records/Pane';
import PaneContainer from '../containers/PaneContainer';
import classNames from 'classnames';

const PaneView = ({
  pane,
  onClickSplitHorizontally,
  onClickSplitVertically,
  onClickUnsplit
}) => {
  return (
    <div className={classNames('PaneView', { vertical: pane.vertical })}>
      {pane.leftChildID ? (
        <PaneContainer paneID={pane.leftChildID} />
      ) : ''}
      {pane.rightChildID ? (
        <PaneContainer paneID={pane.rightChildID} />
      ) : ''}
      {!pane.leftChildID && !pane.rightChildID ? (
        <div>
          {pane.tabs !== null ? (
            <TabBar />
          ) : ''}
          <ButtonToolbar>
            <Button onClick={onClickSplitHorizontally}>Split Horizontally</Button>
            <Button onClick={onClickSplitVertically}>Split Vertically</Button>
            <Button onClick={onClickUnsplit}>Unsplit</Button>
          </ButtonToolbar>
        </div>
      ) : ''}
    </div>
  );
};

PaneView.propTypes = {
  pane: PropTypes.instanceOf(Pane).isRequired,
  onClickSplitHorizontally: PropTypes.func.isRequired,
  onClickSplitVertically: PropTypes.func.isRequired,
  onClickUnsplit: PropTypes.func.isRequired
};

export default PaneView;
