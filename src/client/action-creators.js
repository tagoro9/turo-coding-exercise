import fetch from 'isomorphic-fetch';
import Qs from 'qs';
import moment from 'moment';
import R from 'ramda';
import { pushPath as changePath } from 'redux-simple-router';

/**
 * This file contains all the actions that can be launched
 * inside the app.
 */

/**
 * Set a new state in the store
 */
export function setState(state) {
  return {
    type: 'SET_STATE',
    state,
  };
}

/**
 * Update form values
 */
export function updateForm(data) {
  return {
    type: 'UPDATE_FORM',
    data,
  };
}

/**
 * Action to indicate a search was started
 * @returns {{type: string}}
 */
export function searchStarted() {
  return {
    type: 'SEARCH_STARTED',
  };
}

/**
 * Cancel a search in process
 */
export function cancelSearch() {
  return {
    type: 'CANCEL_SEARCH',
  };
}

/**
 * Action to indicate there were errors
 * while fetching the cars
 * @param {Array} errors List of errors
 */
export function searchError(errors) {
  return {
    type: 'SEARCH_ERROR',
    errors,
  };
}

/**
 * Set results that came from server
 */
export function receiveCars(data) {
  return {
    type: 'RECEIVE_CARS',
    data,
  };
}

/**
 * Search results
 */
export function search(data) {
  return dispatch => {
    const roundTime = (time) => {
      const t = moment(time);
      const remainder = (30 - t.minute()) % 30;
      return t.add(remainder, 'minutes').format('HH:mm');
    }
    const parameters = {
      dest: data.get('dest'),
      startdate: moment(data.get('startDate')).format('MM/DD/YYYY'),
      enddate: moment(data.get('endDate')).format('MM/DD/YYYY'),
      pickuptime: roundTime(data.get('pickupTime')),
      dropofftime: roundTime(data.get('dropOffTime')),
    };
    const url = '/api/search/?' + Qs.stringify(parameters);
    dispatch(searchStarted());
    fetch(url)
    .then(response => {
      const json = response.json();
      if (response.status >= 400) {
        return json.then(Promise.reject.bind(Promise));
      }
      return json;
    })
    .then(json => {
      const cars = json.Result.map(c => {
        const type = (R.path(['MetaData', 'CarMetaData', 'CarTypes'], json) || []).find(t => t.CarTypeCode === c.CarTypeCode);
        return R.merge(c, type);
      });
      dispatch(changePath('/results'));
      dispatch(receiveCars(cars));
    })
    .catch((ex) => {
      dispatch(searchError(ex.errors || ['There was a problem connecting to the server. Try again later.']));
    });
  };
}

/**
 * Open a car in the results page
 * @param reference Car reference
 */
export function openCar(reference) {
  return {
    type: 'OPEN_CAR',
    reference,
  };
}

export const pushPath = changePath;

/**
 * Close a car in the results page
 */
export function closeCar() {
  return {
    type: 'CLOSE_CAR',
  };
}
