import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Pokemon } from './../../common/interfaces/pokemon';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  providers: [PokemonService]
})
export class PokemonListComponent implements OnInit {

  public pokemon: Observable<Pokemon[]>;
  public showGrid = true;

  constructor(
    private pokemonService: PokemonService) { }

  public ngOnInit() {
    this.pokemonService.setTitle();
    this.pokemon = this.pokemonService.pokemon;
  }

  public search(term: string) {
    this.pokemonService.search(term);
  }

}
