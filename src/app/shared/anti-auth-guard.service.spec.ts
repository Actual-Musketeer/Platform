import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { AntiAuthGuard } from './anti-auth-guard.service';

describe('AntiAuthGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AntiAuthGuard],
            imports: [StoreModule.forRoot({}), RouterTestingModule],
        });
    });

    it(
        'should be created',
        inject([AntiAuthGuard], (service: AntiAuthGuard) => {
            expect(service).toBeTruthy();
        }),
    );
});
