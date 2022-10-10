export interface IGame {
  id: number;
  name: string;
  slug: string;
  released: string;
  genres: Array<Object>;
  background_image: string;
  stores: Store[];
  platforms: Array<Object>;
}

interface Store {
  id: number;
  name: string;
  slug: string;
  domain: string;
  image_background: string;
}

export interface IGamePost extends IGame {
  description: string;
  background_image_additional: string;
}
