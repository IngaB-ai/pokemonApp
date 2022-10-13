import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-abilities-description',
  templateUrl: './abilities-description.component.html',
  styleUrls: ['./abilities-description.component.scss']
})
export class AbilitiesDescriptionComponent implements OnInit {

  @Input() dope: any;

  shortAbilityDescription: string = "";

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.pokemonService.getAbbilityDescription(this.dope).subscribe((data: any) => {
      let abilityDescription = data.effect_entries.find((x: any) => x.language.name == "en")
      this.shortAbilityDescription = abilityDescription.short_effect;
    })
  }


}
