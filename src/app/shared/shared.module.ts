import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AntiAuthGuard } from './anti-auth-guard.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [],
    providers: [AuthGuard, AntiAuthGuard],
})
export class SharedModule {}
