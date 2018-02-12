import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';

import { MaterialService } from './material.service';

const MODULES = [MatButtonModule, MatIconModule, MatToolbarModule, MatMenuModule];

@NgModule({
    imports: MODULES,
    exports: MODULES,
    providers: [MaterialService],
})
export class MaterialModule {}
