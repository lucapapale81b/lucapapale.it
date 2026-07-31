import { getPublishedTravels } from './travels';

export type VisitedCountryCode =
  | 'ES' | 'PT' | 'FR' | 'IT' | 'GB' | 'IE' | 'BE' | 'NL' | 'DE' | 'DK'
  | 'NO' | 'SE' | 'CZ' | 'RO' | 'HU' | 'AT' | 'SI' | 'HR' | 'ME'
  | 'GR' | 'CY' | 'MT' | 'CA' | 'IS' | 'AR' | 'GI';

export interface VisitedCountry {
  name: string;
  code: VisitedCountryCode;
  continent: string;
  visited: true;
  countsAsCountry: boolean;
  href?: string;
  hasPublishedContent: boolean;
}

interface ConfirmedCountry {
  name: string;
  code: VisitedCountryCode;
  continent: string;
}

/*
 * Gibilterra resta una destinazione visitata, ma non contribuisce al totale
 * degli Stati visitati.
 */
const confirmedCountries: ConfirmedCountry[] = [
  { name: 'Spagna', code: 'ES', continent: 'Europa' },
  { name: 'Portogallo', code: 'PT', continent: 'Europa' },
  { name: 'Francia', code: 'FR', continent: 'Europa' },
  { name: 'Italia', code: 'IT', continent: 'Europa' },
  { name: 'Regno Unito', code: 'GB', continent: 'Europa' },
  { name: 'Irlanda', code: 'IE', continent: 'Europa' },
  { name: 'Belgio', code: 'BE', continent: 'Europa' },
  { name: 'Paesi Bassi', code: 'NL', continent: 'Europa' },
  { name: 'Germania', code: 'DE', continent: 'Europa' },
  { name: 'Danimarca', code: 'DK', continent: 'Europa' },
  { name: 'Norvegia', code: 'NO', continent: 'Europa' },
  { name: 'Svezia', code: 'SE', continent: 'Europa' },
  { name: 'Repubblica Ceca', code: 'CZ', continent: 'Europa' },
  { name: 'Romania', code: 'RO', continent: 'Europa' },
  { name: 'Ungheria', code: 'HU', continent: 'Europa' },
  { name: 'Austria', code: 'AT', continent: 'Europa' },
  { name: 'Slovenia', code: 'SI', continent: 'Europa' },
  { name: 'Croazia', code: 'HR', continent: 'Europa' },
  { name: 'Montenegro', code: 'ME', continent: 'Europa' },
  { name: 'Grecia', code: 'GR', continent: 'Europa' },
  { name: 'Cipro', code: 'CY', continent: 'Europa' },
  { name: 'Malta', code: 'MT', continent: 'Europa' },
  { name: 'Canada', code: 'CA', continent: 'Nord America' },
  { name: 'Islanda', code: 'IS', continent: 'Europa' },
  { name: 'Argentina', code: 'AR', continent: 'Sud America' },
  { name: 'Gibilterra', code: 'GI', continent: 'Europa' },
];

export const getVisitedCountries = async (): Promise<VisitedCountry[]> => {
  const publishedTravels = await getPublishedTravels();
  const publishedByCountry = new Map(
    publishedTravels.map(({ data }) => [data.countryCode, data]),
  );

  return confirmedCountries.map((country) => {
    const publishedTravel = publishedByCountry.get(country.code);

    return {
      ...country,
      visited: true,
      countsAsCountry: country.code !== 'GI',
      href: publishedTravel
        ? `/viaggi/${publishedTravel.slug}`
        : undefined,
      hasPublishedContent: Boolean(publishedTravel),
    };
  });
};
