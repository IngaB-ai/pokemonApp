import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-selected-pokemon',
  templateUrl: './selected-pokemon.component.html',
  styleUrls: ['./selected-pokemon.component.scss']
})
export class SelectedPokemonComponent implements OnInit {

  @Input() selectedPokemon: any;

  //@ts-ignore
  abilityDescription: any = null;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {


  }


  showAbilities(abilitiesUrl: string) {

    this.pokemonService.getAbbilityDescription(abilitiesUrl).subscribe((data: any) => {
      console.log(data)
      this.abilityDescription = data.effect_entries.find((x: any) => x.language.name == "en")
      console.log(this.abilityDescription)

    })
  }

  selecttts() {
    console.log("child outer")
  }

  heights() {
    console.log("child inner")
  }

}
