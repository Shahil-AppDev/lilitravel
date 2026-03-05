import { Destination } from '../../types/content';
import { americasDestinations } from './americas';
import { europeDestinations } from './europe';
import { asiaDestinations } from './asia';
import { peruDestinations } from './peru';
import { boliviaDestinations } from './bolivia';
import { chileDestinations } from './chile';

export const allDestinations: Destination[] = [
  ...americasDestinations,
  ...europeDestinations,
  ...asiaDestinations,
  ...peruDestinations,
  ...boliviaDestinations,
  ...chileDestinations,
];

export const getDestinationBySlug = (slug: string): Destination | undefined => {
  return allDestinations.find((d) => d.slug === slug);
};

export const getDestinationsByRegion = (region: Destination['region']): Destination[] => {
  return allDestinations.filter((d) => d.region === region);
};
