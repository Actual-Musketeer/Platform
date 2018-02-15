import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { REDUCERS } from './reducers';

@NgModule({
    imports: [StoreModule.forRoot(REDUCERS)],
    declarations: [],
})
export class AppStoreModule {}
