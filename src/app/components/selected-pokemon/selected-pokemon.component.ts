import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-selected-pokemon',
  templateUrl: './selected-pokemon.component.html',
  styleUrls: ['./selected-pokemon.component.scss']
})
export class SelectedPokemonComponent implements OnInit {

  @Input() selectedPokemon: any;


  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {


  }


}
