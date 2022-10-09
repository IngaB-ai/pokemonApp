import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { IPokemonResults } from '../../services/model/pokemon-model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  loading = true;
  // @ts-ignore
  pokemonListData$: Observable<any>;
  pokemonList: IPokemonResults[] = [];

  constructor(private pokemonService: PokemonService) { }

  

  ngOnInit(): void {
    this.getPokemonList();

  }

  getPokemonList() {
    this.pokemonListData$ = this.pokemonService.getPokemons().subscribe(data => {
      console.log(data)
      this.pokemonList = data.results;
      console.log(this.pokemonList)
    });
    this.loading = false;
  }

  

}
