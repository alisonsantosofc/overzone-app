export interface IGame {
  id: number;
  name: string;
  slug: string;
  released: string;
  genres: Array<Object>;
  background_image: string;
  stores: Array<Object>;
  platforms: Array<Object>;
}

export interface IGamePost extends IGame {
  description: string;
  background_image_additional: string;
}