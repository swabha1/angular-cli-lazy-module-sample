
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LazyRoutes } from "./lazy.routes";
import { LazyComponent } from './lazy.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [RouterModule, LazyRoutes, SharedModule],
  declarations: [
    LazyComponent
  ],
  providers: [],
  bootstrap: [LazyComponent]
})
export class LazyModule { }