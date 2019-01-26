import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CarState } from './state';

const carFeatureSelector = createFeatureSelector<CarState>(CarState.stateName);

export const allCarsSelector = createSelector(
  carFeatureSelector,
  state => state.allCars
);
