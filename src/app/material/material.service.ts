import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class MaterialService {
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {}
}
