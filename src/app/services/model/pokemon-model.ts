
export interface IPokemonResults {
  name: string,
  url: string
}

export interface IPokemon {
  count: number,
  next: string,
  previous: string,
  results: IPokemonResults[];
}

