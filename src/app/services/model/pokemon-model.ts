
export interface IPokemonResults {
  name: string,
  url: string
  favorite? :boolean
}

export interface IPokemon {
  count: number,
  next: string,
  previous: string,
  results: IPokemonResults[];
}

