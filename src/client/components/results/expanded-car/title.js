import React, {PropTypes} from 'react';
import {FontIcon} from 'material-ui';

import styles from './title.css';

/**
 * This component represents the title information of
 * an expanded car.
 */
class ExpandedCarTitle extends React.Component {

  render() {
    return (
      <div className={styles.expandedCarTitle}>
        <h3>
          <div>
            <FontIcon className="material-icons">directions_car</FontIcon>
            <span>{this.props.title}</span>
          </div>
          <small>
            <FontIcon className="material-icons">attach_money</FontIcon>
            <span>{this.props.price}</span>
          </small>
        </h3>
      </div>
    );
  }

}

ExpandedCarTitle.propTypes = {
  /**
   * Car title
   */
  title: PropTypes.string.isRequired,
  /**
   * Car price
   */
  price: PropTypes.string.isRequired,
};

ExpandedCarTitle.defaultProps = {
  title: '-',
  price: '-',
};

export default ExpandedCarTitle;
