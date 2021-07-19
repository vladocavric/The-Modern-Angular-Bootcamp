import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CollectionsHomeComponent} from './collections-home/collections-home.component';
import {BioComponent} from './tabs/bio/bio.component';
import {PicsComponent} from './tabs/pics/pics.component';
import {CompaniesComponent} from './tabs/companies/companies.component';
import {LinksComponent} from './tabs/links/links.component';

const routes: Routes = [{path: '', component: CollectionsHomeComponent, children: [
    {path: '', component: BioComponent},
    {path: 'bio', component: BioComponent},
    {path: 'pics', component: PicsComponent},
    {path: 'companies', component: CompaniesComponent},
    {path: 'links', component: LinksComponent},

  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule {
}
