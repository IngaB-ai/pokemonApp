import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { IPokemonResults } from '../../services/model/pokemon-model';
import { Subscription } from 'rxjs';

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



  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonList();
    this.selectPokemon("bulbasaur")

  }

  getPokemonList() {
    this.pokemonListData$ = this.pokemonService.getPokemons().subscribe(data => {
      console.log(data)
      this.pokemonList = data.results;
      console.log(this.pokemonList)
    });
    this.loading = false;
  }

  //todo -ChangeDetectionStrategy

  addToFavorite(pokemon: any) {
    console.log("pressed", pokemon)
    this.favoriteList.push(pokemon)

  }

  selectPokemon(name: any) {
    console.log("outter", name)
    console.log("56", this.pokemonService.getType(name))
    this.selectPokemon$ = this.pokemonService.getType(name).subscribe((data: any) => {
      console.log("hmmmm", data)
      this.pokemon = data
    })

  }

  inner() {
    console.log("outter component")
  }

  onDestroy() {
    this.pokemonListData$.unsubscribe();
    this.selectPokemon$.unsubscribe();
  }


}
