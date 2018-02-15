import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { isEmpty } from 'ramda';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private store: Store<AppState>, private router: Router) {}

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> {
        return this.store
            .select('user')
            .map((userState) => userState.data)
            .map((data) => !isEmpty(data))
            .do((hasData) => {
                if (!hasData) {
                    this.router.navigate(['/login']);
                }
            });
    }
}
