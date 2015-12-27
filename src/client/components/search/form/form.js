import {TextField, DatePicker, TimePicker, RaisedButton} from 'material-ui';
import React, {PropTypes} from 'react';
import {Map, List} from 'immutable';

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
          errorText={this.props.errors.get('destErrorText')}
        />
        <DatePicker
          fullWidth
          hintText="Start date"
          floatingLabelText="Start date"
          value={this.props.data.get('startDate')}
          onChange={this._handleInputChange('startDate').bind(this)}
          errorText={this.props.errors.get('startDateErrorText')}
        />
        <DatePicker
          fullWidth
          hintText="End date"
          floatingLabelText="End date"
          value={this.props.data.get('endDate')}
          onChange={this._handleInputChange('endDate').bind(this)}
          errorText={this.props.errors.get('endDateErrorText')}
        />
        <TimePicker
          fullWidth
          ref="pickupTime"
          format="24hr"
          hintText="Pickup time"
          floatingLabelText="Pickup time"
          defaultTime={this.props.data.get('pickupTime')}
          onChange={this._handleInputChange('pickupTime').bind(this)}
          errorText={this.props.errors.get('pickupTimeErrorText')}
        />
        <TimePicker
          ref="dropOffTime"
          fullWidth
          format="24hr"
          hintText="Drop off time"
          floatingLabelText="Drop off time"
          defaultTime={this.props.data.get('dropOffTime')}
          onChange={this._handleInputChange('dropOffTime').bind(this)}
          errorText={this.props.errors.get('dropOffTimeErrorText')}
        />
        <div>
          {this._renderErrors(this.props.serverErrors)}
        </div>
        <div className={styles.searchButton}>
          <RaisedButton
            onClick={() => this.props.onSearch(this.props.data)}
            label="Find a car"
            primary />
        </div>
      </div>
    );
  }

  _renderErrors(errors) {
    if (errors.size > 0) {
      return (
        <ul>
          {errors.map((e, i) => <li key={i}>{e}</li>)}
        </ul>
      );
    }
    return null;
  }

  /**
   * Create a change handle por a prop name
   * @param prop Prop name
   * @returns {Function} Handler function
   * @private
     */
  _handleInputChange(prop) {
    return (e, val) => {
      if (this.props.onChange) {
        this.props.onChange(this.props.data.set(prop, e ? e.target.value : val));
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
  /**
   * Form errors
   */
  errors: PropTypes.instanceOf(Map).isRequired,
  /**
   * Errors returned by the server
   */
  serverErrors: PropTypes.instanceOf(List).isRequired,
  /**
   * Search function handler
   */
  onSearch: PropTypes.func,
};

Form.defaultProps = {
  data: new Map(),
  errors: new Map(),
  serverErrors: new List(),
};

export default Form;
