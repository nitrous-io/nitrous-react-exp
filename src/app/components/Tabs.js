import './Tabs.sass';
import React, {PropTypes} from 'react';
import classNames from 'classnames';

const klass = class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classNames('Tabs', this.props.className)}>
        <ul>
          <li>tab</li>
          <li>tab</li>
        </ul>
      </div>
    );
  }
};

klass.propTypes = { className: PropTypes.string };

export default klass;
