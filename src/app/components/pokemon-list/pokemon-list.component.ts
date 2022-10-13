import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { IPokemonResults } from '../../services/model/pokemon-model';
import { Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  loading = true;
  pokemonList: IPokemonResults[] = [];
  favoriteList: any[] = [];
  pokemon: any = null;

  pokemonListData$: Subscription = Subscription.EMPTY;
  selectPokemon$: Subscription = Subscription.EMPTY;

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {

    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationStart) {

          if (event.url !== "/dashboard") {
            // permanent pokemons list getting updated in local storage when route is changed
            localStorage['pokemons'] = JSON.stringify(this.pokemonList)
            // on route change the component is not getting destroyed
            //https://blog.devgenius.io/where-ngondestroy-fails-you-54a8c2eca0e0
            this.pokemonListData$.unsubscribe();
            this.selectPokemon$.unsubscribe();
          }
        }
      });

    if (this.pokemonList === undefined || this.pokemonList.length == 0) {
      this.getPokemonList();
    }
    this.selectPokemon("bulbasaur")

  }

  getPokemonList() {
    this.pokemonListData$ = this.pokemonService.getPokemons().subscribe(data => {
      this.pokemonList = data.results;
    });
    this.loading = false;
  }

  addToFavorite(pokemon: any) {
    pokemon.favorite = !pokemon.favorite;
  }

  selectPokemon(name: any) {
    this.selectPokemon$ = this.pokemonService.getType(name).subscribe((data: any) => {
      this.pokemon = data
    })

  }

  // onDestroy() {
  //   this.pokemonListData$.unsubscribe();
  //   this.selectPokemon$.unsubscribe();
  // }

}
