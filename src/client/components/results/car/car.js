import React, {PropTypes} from 'react';
import {FontIcon, Divider} from 'material-ui';

import styles from './car.css';

/**
 * This component represents a car inside the search results
 * page.
 */
class Car extends React.Component {

  render() {
    return (
      <div onClick={this.props.onClick}>
        <div className={styles.car}>
          <div className={styles.carIcon}>
            <FontIcon className="material-icons">directions_car</FontIcon>
          </div>
          <div className={styles.carTitle}>
            <span>{this.props.title}</span>
          </div>
          <div className={styles.carPrice}>
            <FontIcon className="material-icons">attach_money</FontIcon>
            <span>{this.props.price}</span>
          </div>
        </div>
        <Divider/>
      </div>
    );
  }

}

Car.propTypes = {
  /**
   * Car total price
   */
  price: PropTypes.string.isRequired,
  /**
   * Car description
   */
  title: PropTypes.string.isRequired,
  /**
   * Click handler function
   */
  onClick: PropTypes.func,
};

Car.defaultProps = {
  price: '-',
  title: '-',
};

export default Car;
