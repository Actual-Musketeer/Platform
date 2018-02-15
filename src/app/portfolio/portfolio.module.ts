import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
    imports: [CommonModule, PortfolioRoutingModule, SharedModule],
    declarations: [PortfolioComponent],
})
export class PortfolioModule {}
