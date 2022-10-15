import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { AppDisplaySettingsComponent } from './components/app-display-settings/app-display-settings.component';
import { SelectedPokemonComponent } from './components/selected-pokemon/selected-pokemon.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AbilitiesDescriptionComponent } from './components/abilities-description/abilities-description.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    AppDisplaySettingsComponent,
    SelectedPokemonComponent,
    NavBarComponent,
    AbilitiesDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    if (localStorage['theme'] === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      console.log("dark removed")
      document.documentElement.classList.remove('dark')
    }
  }
}
