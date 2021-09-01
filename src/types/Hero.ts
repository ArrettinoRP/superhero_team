export interface Appearance {
  eyeColor: string;
  gender: string;
  hairColor: string;
  height: string[];
  race: string;
  weight: string[];
}

export interface Biography {
  aliases: string[];
  alignment: string;
  alterEgos: string;
  firstAppearance: string;
  fullName: string;
  placeOfBirth: string;
  publisher: string;
}

export interface Connections {
  groupAffiliation: string;
  relatives: string;
}

export interface Images {
  lg: string;
  md: string;
  sm: string;
  xs: string;
}

export interface Powerstats {
  combat: number;
  durability: number;
  intelligence: number;
  power: number;
  speed: number;
  strength: number;
}

export interface Work {
  base: string;
  occupation: string;
}

export interface Hero {
  appearance: Appearance;
  biography: Biography;
  connections: Connections;
  id: number;
  images: Images;
  name: string;
  powerstats: Powerstats;
  slug: string;
  work: Work;
}
