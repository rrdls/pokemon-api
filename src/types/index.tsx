export interface PokemonType {
  id: number;
  name: string;
  url: string;
  types: [{ type: { name: string } }];
  species: { url: string };
  sprites: { other: any };
  height: number;
  weight: number;
  abilities: [{ ability: { name: string } }];
  stats: [{ base_stat: number; stat: { name: string } }];
  moves: [{ move: { name: string } }];
}

export interface CardDetailProps {
  location: { state: { pokemon: PokemonType; color: string } };
}
export interface CardProps {
  pokemon: PokemonType;
}
