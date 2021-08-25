import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon.model';
import { PokemonService } from './../shared/services/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  page = 0;
  readonly amountPg = 12;

  constructor(
    public pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.listPokemon();
  }

  listPokemon(): void{
    this.page++;
    this.pokemonService.getPokemons(this.page, this.amountPg)
    .subscribe(cards =>
       this.pokemons = cards.data);
  }

  goToDetails(){
    console.log("Denner")

  }

}
