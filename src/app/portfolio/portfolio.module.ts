import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
    imports: [CommonModule, PortfolioRoutingModule],
    declarations: [PortfolioComponent],
})
export class PortfolioModule {}
