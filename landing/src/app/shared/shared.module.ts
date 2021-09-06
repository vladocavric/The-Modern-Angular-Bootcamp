import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaninatorComponent} from './paninator/paninator.component';


@NgModule({
  declarations: [
    PaninatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaninatorComponent
  ]
})
export class SharedModule {
}
