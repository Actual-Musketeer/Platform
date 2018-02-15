import { Action } from '@ngrx/store';

export enum UserActionTypes {
    SET = '[User] SET',
    REMOVE = '[User] REMOVE',
}

export class SetUserAction implements Action {
    public readonly type: string = UserActionTypes.SET;

    constructor(public payload: UserState) {}
}

export class RemoveUserAction implements Action {
    public readonly type: string = UserActionTypes.REMOVE;

    constructor() {}
}

export type Actions = SetUserAction;
