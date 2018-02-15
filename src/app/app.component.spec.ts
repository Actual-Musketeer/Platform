import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ToolBarModule } from './tool-bar/tool-bar.module';

describe('AppComponent', () => {
    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [AppComponent],
                imports: [
                    RouterTestingModule,
                    MaterialModule,
                    StoreModule.forRoot({}),
                    ToolBarModule,
                ],
                providers: [
                    {
                        provide: AngularFireAuth,
                        useValue: {
                            authState: Observable.create(),
                        },
                    },
                ],
            }).compileComponents();
        }),
    );
    it(
        'should create the app',
        async(() => {
            const fixture = TestBed.createComponent(AppComponent);
            const app = fixture.debugElement.componentInstance;
            expect(app).toBeTruthy();
        }),
    );
});
