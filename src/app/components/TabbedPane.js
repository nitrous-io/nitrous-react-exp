import './TabbedPane.sass';
import React, {PropTypes} from 'react';
import classNames from 'classnames';
import Tabs from './Tabs';

const klass = class TabbedPane extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classNames('TabbedPane', this.props.className)}>
        <Tabs />
      </div>
    );
  }
};

klass.propTypes = { className: PropTypes.string };

export default klass;
