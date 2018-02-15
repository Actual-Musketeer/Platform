import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AntiAuthGuard } from '../shared/anti-auth-guard.service';
import { AuthGuard } from '../shared/auth-guard.service';
import { LoginComponent } from './login.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AntiAuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LoginRoutingModule {}
