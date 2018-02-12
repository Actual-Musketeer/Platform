import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ToolBarComponent } from './tool-bar/tool-bar.component';

@NgModule({
    declarations: [AppComponent, ToolBarComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
        FlexLayoutModule,
        MaterialModule,
        PortfolioModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
