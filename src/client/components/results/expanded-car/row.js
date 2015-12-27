import React, {PropTypes} from 'react';
import {Divider, FontIcon} from 'material-ui';

import styles from './row.css';

/**
 * This component represents an information row inside
 * an expanded car.
 */
class ExpandedCarRow extends React.Component {

  render() {
    return (
      <div>
        <div className={styles.expandedCarRow}>
          <div>
            <FontIcon className="material-icons">{this.props.icon}</FontIcon>
            <span>{this.props.label}</span>
          </div>
          <div>{this.props.text}</div>
        </div>
        <Divider/>
      </div>
    );
  }

}

ExpandedCarRow.propTypes = {
  /**
   * Icon that represents the row
   */
  icon: PropTypes.string.isRequired,
  /**
   * Row label
   */
  label: PropTypes.string.isRequired,
  /**
   * Row text (a.k.a car field)
   */
  text: PropTypes.string.isRequired,
};

ExpandedCarRow.defaultProps = {
  text: '-',
};

export default ExpandedCarRow;
