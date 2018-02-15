import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import * as User from './store/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(private afAuth: AngularFireAuth, private store: Store<AppState>) {}

    public ngOnInit(): void {
        this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        // .then(() => {
        //     const provider = new firebase.auth.FacebookAuthProvider();
        //     // In memory persistence will be applied to the signed in Google user
        //     // even though the persistence was set to 'none' and a page redirect
        //     // occurred.
        //     return this.afAuth.auth.signInWithPopup(provider).then((result) => {
        //         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        //         const token = result.credential.accessToken;
        //         // The signed-in user info.
        //         const user = result.user;
        //         // ...
        //         console.log(token);
        //         console.log(user);
        //     });
        // })
        // .catch((error) => {
        //     // Handle Errors here.
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        // });

        this.afAuth.authState.subscribe((user) => {
            console.log(user);
            this.store.dispatch(new User.SetUserAction({ data: user }));
        });
    }
}
