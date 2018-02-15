import { Action } from '@ngrx/store';

export enum UserActionTypes {
    SET = '[User] SET',
}

export class SetUserAction implements Action {
    public readonly type: string = UserActionTypes.SET;

    constructor(public payload: UserState) {}
}

export type Actions = SetUserAction;
