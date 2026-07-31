export interface OtherTravelDestination {
  country: string;
  cities?: string[];
  year?: number;
  isTerritory?: boolean;
}

export interface OtherTravelGroup {
  area: string;
  destinations: OtherTravelDestination[];
}

export const otherTravelGroups: OtherTravelGroup[] = [
  {
    area: 'Europa Occidentale',
    destinations: [
      { country: 'Spagna' },
      { country: 'Portogallo' },
      { country: 'Francia' },
      { country: 'Regno Unito', cities: ['Londra', 'Edimburgo'] },
      { country: 'Irlanda' },
      { country: 'Belgio' },
      { country: 'Paesi Bassi' },
      { country: 'Gibilterra', isTerritory: true },
    ],
  },
  {
    area: 'Europa Centrale',
    destinations: [
      { country: 'Germania', cities: ['Berlino', 'Amburgo'], year: 2026 },
      { country: 'Repubblica Ceca', cities: ['Praga'], year: 2026 },
      { country: 'Romania' },
      { country: 'Ungheria' },
      { country: 'Austria' },
      { country: 'Slovenia' },
    ],
  },
  {
    area: 'Mediterraneo',
    destinations: [
      { country: 'Italia' },
      { country: 'Croazia' },
      { country: 'Montenegro' },
      { country: 'Grecia' },
      { country: 'Cipro' },
      { country: 'Malta' },
    ],
  },
  {
    area: 'Europa del Nord',
    destinations: [
      { country: 'Danimarca', cities: ['Copenaghen'], year: 2026 },
      { country: 'Norvegia' },
      { country: 'Svezia', cities: ['Malmö'], year: 2026 },
    ],
  },
];
