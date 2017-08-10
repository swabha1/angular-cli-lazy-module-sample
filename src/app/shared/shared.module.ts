import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';

@NgModule({
  declarations: [
    SharedComponent
  ],
  bootstrap: [SharedComponent],
  exports: [SharedComponent]
})
export class SharedModule { }