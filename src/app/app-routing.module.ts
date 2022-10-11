import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { AppDisplaySettingsComponent } from './components/app-display-settings/app-display-settings.component';

const routes: Routes = [
  /*todo exact match, maybe lazy loading
  */
  { path: 'dashboard', component: PokemonListComponent },
  { path: 'settings', component: AppDisplaySettingsComponent },
  { path: '**', component: PokemonListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
