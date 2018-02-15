import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AvatarComponent } from './avatar/avatar.component';
import { ToolBarComponent } from './tool-bar.component';

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule],
    declarations: [ToolBarComponent, AvatarComponent],
    exports: [ToolBarComponent],
})
export class ToolBarModule {}
