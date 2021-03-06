import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [LoginComponent],
                providers: [
                    {
                        provide: AngularFireAuth,
                        useValue: {
                            auth: {
                                setPersistence: () => new Promise(() => {}),
                            },
                        },
                    },
                ],
            }).compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
