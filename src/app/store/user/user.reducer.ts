import { path } from 'ramda';

import * as UserActions from './user.actions';

const INITIAL_STATE = { data: {} };

export function userReducer(
    state: UserState = INITIAL_STATE,
    action: UserActions.Actions,
): UserState {
    switch (action.type) {
        case UserActions.UserActionTypes.SET:
            if (!path(['payload', 'data'], action)) {
                return state;
            }

            return action.payload;
        case UserActions.UserActionTypes.REMOVE:
            return INITIAL_STATE;
        default:
            return state;
    }
}
