import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-tool-bar',
    templateUrl: './tool-bar.component.html',
    styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent {
    private user$: Observable<UserState>;

    constructor(store: Store<AppState>) {
        this.user$ = store.select('user');
    }
}
