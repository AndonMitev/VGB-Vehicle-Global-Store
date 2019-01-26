import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './state';

export const authenticationFeatureSelector =
  createFeatureSelector<UserState>('user');

export const userDataSelector = createSelector(
  authenticationFeatureSelector,
  state => state.userData
);