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
  onClickSplitVertically
}) => {
  return (
    <div className={classNames('PaneView', { vertical: pane.vertical })}>
      {pane.leftPaneID ? (
        <PaneContainer paneID={pane.leftPaneID} />
      ) : ''}
      {pane.rightPaneID ? (
        <PaneContainer paneID={pane.rightPaneID} />
      ) : ''}
      {!pane.leftPaneID && !pane.rightPaneID ? (
        <div>
          {pane.tabs !== null ? (
            <TabBar />
          ) : ''}
          <ButtonToolbar>
            <Button onClick={onClickSplitHorizontally}>Split Horizontally</Button>
            <Button onClick={onClickSplitVertically}>Split Vertically</Button>
          </ButtonToolbar>
        </div>
      ) : ''}
    </div>
  );
};

PaneView.propTypes = {
  pane: PropTypes.instanceOf(Pane).isRequired,
  onClickSplitHorizontally: PropTypes.func.isRequired,
  onClickSplitVertically: PropTypes.func.isRequired
};

export default PaneView;
