import Immutable, {List, Map} from 'immutable';

/**
 * Reducers in charge of serch realted stuff
 */

const initialState = Immutable.fromJS({
  form: {
    data: {
      dest: '',
      startDate: null,
      endDate: null,
      pickupTime: null,
      dropOffTime: null,
    },
    errors: {
      destErrorText: null,
      startDateErrorText: null,
      endDateErrorText: null,
      pickupTimeErrorText: null,
      dropOffTimeErrorText: null,
    },
    serverErrors: new List([]),
  },
  loading: false,
  string: 'This is the search string I used',
});

export default function search(state = initialState, action) {
  switch (action.type) {
  case 'SEARCH_STARTED':
    return state.set('loading', true).setIn(['form', 'serverErrors'], new List()).setIn(['form', 'errors'], new Map());
  case 'SEARCH_ERROR':
    return state.set('loading', false).setIn(['form', 'serverErrors'], new List(action.errors));
  case 'CANCEL_SEARCH':
    return state.set('loading', false).setIn(['form', 'serverErrors'], new List());
  case 'RECEIVE_CARS':
    return state.set('loading', false).setIn(['form', 'serverErrors'], new List());
  case 'FORM_ERRORS':
    return state.setIn(['form', 'errors'], new Map(action.errors));
  case 'UPDATE_FORM':
    return state.setIn(['form', 'data'], action.data);
  default:
    return state;
  }
}
