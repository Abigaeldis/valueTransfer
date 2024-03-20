export interface Evolution {
  id: number;
  name: string;
  apiEvolutions: { name: string; pokedexId: number }[];
}
