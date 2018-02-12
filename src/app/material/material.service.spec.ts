import { inject, TestBed } from '@angular/core/testing';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { MaterialService } from './material.service';

describe('MaterialService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                MaterialService,
                MatIconRegistry,
                {
                    provide: DomSanitizer,
                    useValue: { bypassSecurityTrustResourceUrl: () => {} },
                },
            ],
        });
    });

    it(
        'should be created',
        inject([MaterialService], (service: MaterialService) => {
            expect(service).toBeTruthy();
        }),
    );
});
