import { CarActionTypes, SaveAllCarsInStore } from './action';
import { CarState } from './state';

const initialState: CarState = {
  allCars: []
};



function saveAllCars(state: CarState, payload): CarState {
  return {
    ...state,
    allCars: payload
  };
}

export function carReducer(state: CarState = initialState, action: CarActionTypes) {
  switch (action.type) {
    case SaveAllCarsInStore:
      return saveAllCars(state, action.payload);
    default:
      return state;
  }
}