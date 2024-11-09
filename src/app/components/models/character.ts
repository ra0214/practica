export interface Character {
  id: number;
  name: string;
  image: string;
  race: string;
  gender: string;
  base_ki: string;
  total_ki: string;
  description: string;
  transformations: ITransformation[];
}

export interface ITransformation {
  name: string;
}