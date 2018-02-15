import { ActionReducerMap } from '@ngrx/store';

import { userReducer } from './user';

export const REDUCERS: ActionReducerMap<AppState> = {
    user: userReducer,
};
