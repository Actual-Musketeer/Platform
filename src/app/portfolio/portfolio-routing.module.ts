import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/auth-guard.service';
import { PortfolioComponent } from './portfolio.component';

const routes: Routes = [
    {
        path: 'portfolio',
        component: PortfolioComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PortfolioRoutingModule {}
