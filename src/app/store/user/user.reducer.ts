import * as UserActions from './user.actions';

export function userReducer(state: UserState, action: UserActions.Actions): UserState {
    switch (action.type) {
        case UserActions.UserActionTypes.SET:
            return action.payload;
        default:
            return state;
    }
}
