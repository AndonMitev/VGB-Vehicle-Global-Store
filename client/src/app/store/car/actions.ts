import { Action } from '@ngrx/store';

export const GetAllCarsEffect = 'This will trigger get all cars effect';
export const SaveAllCarsInStore = 'This will save all cars in store';

export class GetAllCarsEffectAction implements Action {
  readonly type: string = GetAllCarsEffect;
  constructor(public payload?: any) { }
}

export class SaveAllCarsAction implements Action {
  readonly type: string = SaveAllCarsInStore;
  constructor(public payload: any) { }
}

export type CarActionTypes =
  GetAllCarsEffectAction |
  SaveAllCarsAction