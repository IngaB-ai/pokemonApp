import { TestBed, tick, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';

import { PokemonService } from './pokemon.service';
import { IPokemon } from './model/pokemon-model';

describe('FetchService', () => {
  let httpClient: HttpClient;
  let httpTestController: HttpTestingController;
  let service: PokemonService;
  let testUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1";

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule, HttpClientTestingModule] });

  }));


  it('getPokemons should return expected data', waitForAsync((done: any) => {

    service = TestBed.inject(PokemonService);
    httpClient = TestBed.inject(HttpClient);
    httpTestController = TestBed.inject(HttpTestingController);

    const expectedData: IPokemon =
    {
      count: 1154,
      next: "https://pokeapi.co/api/v2/pokemon/?offset=1&limit=1",
      previous: null,
      results: [{ name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" }]
    }


    httpClient.get<IPokemon>(testUrl)
      .subscribe(data => {
        console.log("duck", data)
        // When observable resolves, result should match test data
        expect(data).toEqual(expectedData)
      }
      );

      const req = httpTestController.expectOne(
        testUrl
    );
    // Assert that the request is a GET.
    expect(req.request.method).toEqual("GET");
    // Respond with this data when called
    req.flush(expectedData);

      httpTestController.verify();


  }));

  it('should be created', () => {
    service = TestBed.inject(PokemonService);
    expect(service).toBeTruthy();
  });
});

