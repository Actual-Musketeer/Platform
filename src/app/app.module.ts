import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { MaterialModule } from './material/material.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { SettingsModule } from './settings/settings.module';
import { AppStoreModule } from './store/app-store.module';
import { ToolBarModule } from './tool-bar/tool-bar.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
        FlexLayoutModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        MaterialModule,
        AppStoreModule,
        PortfolioModule,
        SettingsModule,
        LoginModule,
        ToolBarModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
