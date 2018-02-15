import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import * as User from '../store/user';

@Component({
    selector: 'app-tool-bar',
    templateUrl: './tool-bar.component.html',
    styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent {
    public user$: Observable<UserState>;

    constructor(private store: Store<AppState>, private afAuth: AngularFireAuth) {
        this.user$ = store.select('user');
    }

    public logout(): void {
        this.afAuth.auth.signOut().then(
            () => this.store.dispatch(new User.RemoveUserAction()),
            (error) => {
                console.log(error);
            },
        );
    }
}
