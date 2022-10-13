import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { AppDisplaySettingsComponent } from './components/app-display-settings/app-display-settings.component';

const routes: Routes = [

  { path: 'dashboard', component: PokemonListComponent },
  { path: 'settings', pathMatch: 'full' ,component: AppDisplaySettingsComponent },
  // { path: '**', component: PokemonListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
