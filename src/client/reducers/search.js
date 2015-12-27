import Immutable, {List} from 'immutable';

/**
 * Reducers in charge of serch realted stuff
 */

const initialState = Immutable.fromJS({
  form: {
    data: {
      dest: 'LAX',
      startDate: new Date('01/12/2016'),
      endDate: new Date('01/15/2016'),
      pickupTime: new Date(),
      dropOffTime: new Date(),
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
    return state.set('loading', true).setIn(['form', 'serverErrors'], new List());
  case 'SEARCH_ERROR':
    return state.set('loading', false).setIn(['form', 'serverErrors'], new List(action.errors));
  case 'CANCEL_SEARCH':
    return state.set('loading', false).setIn(['form', 'serverErrors'], new List());
  case 'RECEIVE_CARS':
    return state.set('loading', false).setIn(['form', 'serverErrors'], new List());
  case 'UPDATE_FORM':
    return state.setIn(['form', 'data'], action.data);
  default:
    return state;
  }
}
