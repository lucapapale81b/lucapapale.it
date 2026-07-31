import type { ImageMetadata } from 'astro';
import berlinImage from '../assets/viaggi/citta/berlino/berlino-duomo-torre-tv.jpeg';
import pragueImage from '../assets/viaggi/citta/praga/praga-ponti-moldava.jpeg';

export interface FavoriteCity {
  name: string;
  country: string;
  countryCode: string;
  description: string;
  image?: ImageMetadata;
  imageAlt?: string;
}

export const favoriteCities: FavoriteCity[] = [
  {
    name: 'Londra',
    country: 'Regno Unito',
    countryCode: 'UK',
    description:
      'Una città in cui tornerei infinite volte. Ogni quartiere ha un ritmo diverso e sembra raccontare una storia propria.',
  },
  {
    name: 'Berlino',
    country: 'Germania',
    countryCode: 'DE',
    description:
      'Storia e cultura contemporanea convivono in una città dalla personalità unica, difficile da confondere con qualsiasi altra.',
    image: berlinImage,
    imageAlt:
      'Il Duomo di Berlino con la torre della televisione sullo sfondo',
  },
  {
    name: 'Praga',
    country: 'Repubblica Ceca',
    countryCode: 'CZ',
    description:
      'Elegante e raccolta, con un centro che invita a camminare senza fretta e a lasciarsi sorprendere.',
    image: pragueImage,
    imageAlt: 'I ponti di Praga sulla Moldava visti dall’alto',
  },
  {
    name: 'Edimburgo',
    country: 'Regno Unito',
    countryCode: 'UK',
    description:
      'Tra castelli, vento e panorami aperti, è una delle città europee che mi sono rimaste più impresse.',
  },
];
