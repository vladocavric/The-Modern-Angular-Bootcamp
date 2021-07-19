import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CollectionsRoutingModule} from './collections-routing.module';
import {CollectionsHomeComponent} from './collections-home/collections-home.component';
import {TableComponent} from './table/table.component';
import {SharedModule} from '../shared/shared.module';
import { TabsComponent } from './tabs/tabs.component';
import { BioComponent } from './tabs/bio/bio.component';
import { PicsComponent } from './tabs/pics/pics.component';
import { CompaniesComponent } from './tabs/companies/companies.component';
import { LinksComponent } from './tabs/links/links.component';


@NgModule({
  declarations: [CollectionsHomeComponent, TableComponent, TabsComponent, BioComponent, PicsComponent, CompaniesComponent, LinksComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class CollectionsModule {
}
