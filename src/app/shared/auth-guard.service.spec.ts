import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { AuthGuard } from './auth-guard.service';

describe('AuthGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthGuard],
            imports: [StoreModule.forRoot({}), RouterTestingModule],
        });
    });

    it(
        'should be created',
        inject([AuthGuard], (service: AuthGuard) => {
            expect(service).toBeTruthy();
        }),
    );
});
