import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AvatarComponent } from './avatar/avatar.component';
import { ToolBarComponent } from './tool-bar.component';

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule, FlexLayoutModule, AngularFireModule],
    declarations: [ToolBarComponent, AvatarComponent],
    exports: [ToolBarComponent],
})
export class ToolBarModule {}
