import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { REDUCERS } from './reducers';
import { UserEffects } from './user/user.effects';

@NgModule({
    imports: [StoreModule.forRoot(REDUCERS), EffectsModule.forRoot([UserEffects]), RouterModule],
    declarations: [],
})
export class AppStoreModule {}
