import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, Observer } from 'rxjs';

import { environment } from './../../environments/environment';
import { IPokemon } from './model/pokemon-model';


@Injectable({
    providedIn: 'root'
})

export class PokemonService {

    constructor(private http: HttpClient) { }


    getPokemons(): Observable<IPokemon> {
        console.log("string", environment.openSourceUrl)
        return this.http.get<IPokemon>(environment.openSourceUrl)
    }

}

