import { Action } from '@ngrx/store';
import { AllCarsModel } from 'src/app/core/models/car/get-all-cars';

export const GetAllCarsEffect = 'This will trigger get all cars effect';
export const SaveAllCarsInStore = 'This will save all cars in store';

export class GetAllCarsEffectAction implements Action {
  readonly type: string = GetAllCarsEffect;
  constructor(public payload?: any) { }
}

export class SaveAllCarsAction implements Action {
  readonly type: string = SaveAllCarsInStore;
  constructor(public payload: AllCarsModel[]) { }
}

export type CarActionTypes =
  GetAllCarsEffectAction |
  SaveAllCarsAction