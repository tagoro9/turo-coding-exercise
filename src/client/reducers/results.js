import Immutable, {List} from 'immutable';


const initialState = Immutable.fromJS({
  cars: new List(),
  openedId: null,
});

export default function results(state = initialState, action) {
  switch (action.type) {
  case 'RECEIVE_CARS':
    return state.set('cars', Immutable.fromJS(action.data));
  case 'OPEN_CAR':
    return state.set('openedId', action.reference);
  case 'CLOSE_CAR':
    return state.set('openedId', null);
  default:
    return state;
  }
}
