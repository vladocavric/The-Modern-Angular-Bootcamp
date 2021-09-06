import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorldNewsListComponent } from './world-news-list/world-news-list.component';
import { TrimOutletNamePipe } from './trim-outlet-name.pipe';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    WorldNewsListComponent,
    TrimOutletNamePipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [WorldNewsListComponent]
})
export class WorldNewsModule { }
