import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Map} from 'immutable';
import {Paper, RaisedButton} from 'material-ui';

import styles from './expanded-car.css';
import Row from './row';
import Title from './title';

/**
 * Car info field map
 */
const FIELDS = [
  {
    name: 'HWRefNumber',
    label: 'Hotwire reference',
    icon: 'link',
  },
  {
    name: 'PossibleFeatures',
    label: 'Possible features',
    icon: 'playlist_add_check',
  },
  {
    name: 'TypicalSeating',
    label: 'Seating',
    icon: 'weekend',
  },
  {
    name: 'CarTypeName',
    label: 'Car Type',
    icon: 'build',
  },
  {
    name: 'SubTotal',
    label: 'Subtotal',
    icon: 'attach_money',
  },
  {
    name: 'TaxesAndFees',
    label: 'Taxes and fees',
    icon: 'attach_money',
  },
  {
    name: 'DailyRate',
    label: 'Daily rate',
    icon: 'today',
  },
  {
    name: 'MileageDescription',
    label: 'Mileage description',
    icon: 'confirmation_number',
  },
  {
    name: 'LocationDescription',
    label: 'Location description',
    icon: 'textsms',
  },
  {
    name: 'PickupAirport',
    label: 'Pickup airport',
    icon: 'airplanemode_active',
  },
];

/**
 * This component represents an expanded car. That is,
 * a car showing all the available information
 */
class ExpandedCar extends React.Component {

  componentDidMount() {
    ReactDOM.findDOMNode(this).scrollIntoViewIfNeeded(true);
  }

  componentDidUpte() {
    ReactDOM.findDOMNode(this).scrollIntoViewIfNeeded(true);
  }

  /**
   * Render the rows displaying the car info
   * @returns {Array} List of rows
   * @private
   */
  _renderRows() {
    return FIELDS.map((f) => <Row key={f.name} icon={f.icon} label={f.label} text={this.props.data.get(f.name)}/>);
  }

  render() {
    return (
      <Paper className={styles.expandedCar} onClick={this.props.onClick} zDepth={3}>
        <Title title={this.props.data.get('PossibleModels') || this.props.data.get('CarTypeCode')} price={this.props.data.get('TotalPrice')} />
        <div className={styles.expandedCarInfo}>
          {this._renderRows()}
          <div className={styles.buttonContainer}>
            <RaisedButton
              label="More info"
              href={this.props.data.get('DeepLink')}
              linkButton
              primary />
          </div>
        </div>
      </Paper>
    );
  }

}

ExpandedCar.propTypes = {
  /**
   * Car data
   */
  data: PropTypes.instanceOf(Map).isRequired,
  /**
   * Click handle function
   */
  onClick: PropTypes.func,
};

ExpandedCar.defaultProps = {
  data: new Map(),
};

export default ExpandedCar;

