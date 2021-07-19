import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'collections', loadChildren: () => import('./collections/collections.module').then(module => module.CollectionsModule)},
  {path: 'elements', loadChildren: () => import('./elements/elements.module').then(module => module.ElementsModule)},
  {path: 'mods', loadChildren: () => import('./mods/mods.module').then(module => module.ModsModule)},
  {path: 'views', loadChildren: () => import('./views/views.module').then(module => module.ViewsModule)},
  {path: 'modules', loadChildren: () => import('./modules/modules.module').then(module => module.ModulesModule)},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
