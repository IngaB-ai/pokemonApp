import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-app-display-settings',
  templateUrl: './app-display-settings.component.html',
  styleUrls: ['./app-display-settings.component.scss']
})
export class AppDisplaySettingsComponent implements OnInit {

  //@ts-ignore
  isDarkMode: boolean;
  settingsNumber: number = 0;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    let temp = localStorage.getItem("amount") || 0;
    //converting to number
    this.settingsNumber = +temp;

  }

  changeTheme() {
    console.log("toggle", !this.isDarkMode);
    this.isDarkMode = !this.isDarkMode;
    this.isDarkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    this.isDarkMode ? localStorage['theme'] = 'dark' : localStorage['theme'] = 'light'
  }

  submit() {
    localStorage['amount'] = JSON.stringify(this.settingsNumber);
  }

}
