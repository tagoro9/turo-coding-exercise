import {TextField, DatePicker, TimePicker, RaisedButton} from 'material-ui';
import React, {PropTypes} from 'react';
import {Map} from 'immutable';

import PureComponent from '../../util/pure-component';
import styles from './form.css';


class Form extends PureComponent {

  /**
   * Focus first input after rendered
   */
  componentDidMount() {
    this.refs.dest.focus();
  }

  render() {
    return (
      <div>
        <TextField
          ref="dest"
          fullWidth
          hintText="Location"
          floatingLabelText="Location"
          value={this.props.data.get('dest')}
          onChange={this._handleInputChange('dest').bind(this)}
          errorText={this.props.data.get('destErrorText')}
        />
        <DatePicker
          fullWidth
          hintText="Start date"
          value={this.props.data.get('startDate')}
          onChange={this._handleInputChange('startDate').bind(this)}
          errorText={this.props.data.get('startDateErrorText')}
        />
        <DatePicker
          fullWidth
          hintText="End date"
          value={this.props.data.get('endDate')}
          onChange={this._handleInputChange('endDate').bind(this)}
          errorText={this.props.data.get('endDateErrorText')}
        />
        <TimePicker
          fullWidth
          format="24hr"
          hintText="Pickup time"
          onChange={this._handleInputChange('pickupTime').bind(this)}
          errorText={this.props.data.get('pickupTimeErrorText')}
        />
        <TimePicker
          fullWidth
          format="24hr"
          hintText="Drop off time"
          onChange={this._handleInputChange('dropOffTime').bind(this)}
          errorText={this.props.data.get('dropOffTimeErrorText')}
        />
        <div className={styles.searchButton}>
          <RaisedButton
            label="Find a car"
            primary />
        </div>
      </div>
    );
  }

  /**
   * Create a change handle por a prop name
   * @param prop Prop name
   * @returns {Function} Handler function
   * @private
     */
  _handleInputChange(prop) {
    return (e) => {
      if (this.props.onChange) {
        this.props.onChange(this.props.data.set(prop, e.target.value));
      }
    };
  }

}

Form.propTypes = {
  /**
   * Change handler function
   */
  onChange: PropTypes.func,
  /**
   * Form data
   */
  data: PropTypes.instanceOf(Map).isRequired,
};

Form.defaultProps = {
  data: new Map(),
};

export default Form;
