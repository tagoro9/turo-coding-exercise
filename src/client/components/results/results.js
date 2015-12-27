import React, {PropTypes} from 'react';
import {List} from 'immutable';
import Paper from 'material-ui/lib/paper';
import {connect} from 'react-redux';
import * as actionCreators from '../../action-creators';

import styles from './results.css';
import Header from './header/header';
import Car from './car/car';
import ExpandedCar from './expanded-car/expanded-car';

/**
 * Results page. Displays a list of cars and some controls
 * to sort results.
 */
class Results extends React.Component {

  /**
   * Handle clicks on cars to open them
   * @param car Car information
   * @private
   */
  _handleCarClick(car) {
    this.props.openCar(car.get('HWRefNumber'));
  }

  /**
   * Render the car that is opened (if any)
   * @param openedId Car id
   * @param cars List of cars
   * @returns {*} Expanded car or empty node
   * @private
   */
  _renderOpened(openedId, cars) {
    if (openedId) {
      const openedCar = cars.find(c => c.get('HWRefNumber') === openedId);
      return (
        <ExpandedCar
          data={openedCar}
          onClick={this.props.closeCar}
        />
      );
    }
    return null;
  }

  /**
   * Render a list of cars (if any)
   * @param cars List of cars
   * @returns {*} Cars nodes or empty node
   * @private
   */
  _renderGroup(cars) {
    if (cars && cars.size > 0) {
      return (
        <Paper zDepth={2}>
          {cars.map(c => <Car onClick={this._handleCarClick.bind(this, c)} key={c.get('HWRefNumber')}
                              title={c.get('PossibleModels') || c.get('CarTypeCode')} price={c.get('TotalPrice')}/>)}
        </Paper>
      );
    }
    return null;
  }

  /**
   * Render the group of cars that is before the opened one
   * @param openedId Opened car
   * @param cars List of cars
   * @returns {*} Cars nodes or empty node
   * @private
   */
  _renderFirstGroup(openedId, cars) {
    return this._renderGroup(cars.takeWhile(c => c.get('HWRefNumber') !== openedId));
  }

  /**
   * Render the group f cars that is after the opened one
   * @param openedId Opened car
   * @param cars List of cars
   * @returns {*} Car nodes or empty node
   * @private
   */
  _renderLastGroup(openedId, cars) {
    if (openedId) {
      return this._renderGroup(cars.skipWhile(c => c.get('HWRefNumber') !== openedId).rest());
    }
    return null;
  }

  render() {
    const {openedId, cars} = this.props;
    return (
      <div className={styles.results}>
        <Header searchString={this.props.searchString} onSearch={() => this.props.pushPath('/')}/>
        <div className={styles.cars}>
          {this._renderFirstGroup(openedId, cars)}
          {this._renderOpened(openedId, cars)}
          {this._renderLastGroup(openedId, cars)}
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  /**
   * List of cars to be displayed
   */
  cars: PropTypes.instanceOf(List).isRequired,
  /**
   * Id of the car that is opened
   */
  openedId: PropTypes.string,
  /**
   * String that represents the search made by the user
   */
  searchString: PropTypes.string.isRequired,
  /**
   * Open a car handler function
   */
  openCar: PropTypes.func.isRequired,
  /**
   * Close a car handler function
   */
  closeCar: PropTypes.func.isRequired,
};

Results.defaultProps = {
  cars: new List(),
  searchString: '-',
};

export default Results;

function mapStateToProps(state) {
  return {
    cars: state.results.get('cars'),
    openedId: state.results.get('openedId'),
    searchString: state.search.get('searchString'),
  };
}

export const ResultsContainer = connect(
  mapStateToProps,
  actionCreators
)(Results);
