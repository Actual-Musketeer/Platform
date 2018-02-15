import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
    @Effect({ dispatch: false })
    public redirectLogin$: Observable<Action> = this.actions$
        .ofType(UserActions.UserActionTypes.SET, UserActions.UserActionTypes.REMOVE)
        .do(() => {
            this.router.navigate(['/']);
        });

    constructor(private actions$: Actions, private router: Router) {}
}
