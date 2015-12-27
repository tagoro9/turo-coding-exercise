import React, {PropTypes} from 'react';
import {List} from 'immutable';
import Paper from 'material-ui/lib/paper';

import styles from './results.css';
import Header from './header/header';
import Car from './car/car';
import ExpandedCar from './expanded-car/expanded-car';

/**
 * Results page. Displays a list of cars and some controls
 * to sort results.
 */
class Results extends React.Component {

  render() {
    return (
      <div className={styles.results}>
        <Header searchString={this.props.searchString}/>
        <div className={styles.cars}>
          <Paper zDepth={2}>
            <Car/>
            <Car/>
          </Paper>
          <ExpandedCar/>
          <Paper zDepth={2}>
            <Car/>
            <Car/>
          </Paper>
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  /**
   * List of cars to be displayed
   */
  results: PropTypes.instanceOf(List).isRequired,
  /**
   * String that represents the search made by the user
   */
  searchString: PropTypes.string.isRequired,
};

Results.defaultProps = {
  results: new List(),
  searchString: '-',
};


export default Results;
