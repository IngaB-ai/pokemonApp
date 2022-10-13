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
        const showAmount = localStorage.getItem("amount")
        return this.http.get<IPokemon>(`${environment.openSourceUrl}?offset=0&limit=${showAmount}`)
    }


    getType(name: string): Observable<any> {
        const url = `${environment.openSourceUrl}${name}`;
        return this.http.get<any>(url);
    }

    getAbbilityDescription(url: string): Observable<any> {
        return this.http.get<any>(url);
    }




}

