import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechNewsListComponent } from './tech-news-list/tech-news-list.component';



@NgModule({
  declarations: [
    TechNewsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TechNewsListComponent]
})
export class TechNewsModule { }
