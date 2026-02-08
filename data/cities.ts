export interface City {
  slug: string
  name: string
  state: string
  description: string
  latitude: number
  longitude: number
  distanceFromStuart: string
  localAttractions: string[]
  fishSpecies: string[]
  bestSeason: string
}

export const cities: City[] = [
  {
    slug: 'stuart',
    name: 'Stuart',
    state: 'FL',
    description: 'Stuart, known as the "Sailfish Capital of the World," offers world-class fishing opportunities in both inshore and offshore waters.',
    latitude: 27.1975,
    longitude: -80.2528,
    distanceFromStuart: 'Home port',
    localAttractions: ['St. Lucie Inlet', 'Indian River Lagoon', 'Stuart Beach'],
    fishSpecies: ['Sailfish', 'Tarpon', 'Snook', 'Redfish', 'Grouper', 'Mahi-Mahi'],
    bestSeason: 'Year-round, with peak sailfish season November-March',
  },
  {
    slug: 'jensen-beach',
    name: 'Jensen Beach',
    state: 'FL',
    description: 'Jensen Beach provides excellent access to the Indian River Lagoon and Atlantic Ocean, making it a premier destination for inshore and nearshore fishing.',
    latitude: 27.2545,
    longitude: -80.2298,
    distanceFromStuart: '5 miles north',
    localAttractions: ['Jensen Beach Causeway', 'Indian River Lagoon', 'Bathtub Reef Beach'],
    fishSpecies: ['Snook', 'Redfish', 'Tarpon', 'Spotted Seatrout', 'Sheepshead', 'Jack Crevalle'],
    bestSeason: 'Year-round, with exceptional spring and fall fishing',
  },
  {
    slug: 'jupiter',
    name: 'Jupiter',
    state: 'FL',
    description: 'Jupiter is famous for its lighthouse and incredible fishing in the Jupiter Inlet and surrounding Atlantic waters.',
    latitude: 26.9342,
    longitude: -80.0942,
    distanceFromStuart: '20 miles south',
    localAttractions: ['Jupiter Inlet', 'Loxahatchee River', 'Jupiter Beach'],
    fishSpecies: ['Sailfish', 'Wahoo', 'Kingfish', 'Snook', 'Tarpon', 'Goliath Grouper'],
    bestSeason: 'November-April for offshore, May-September for inshore',
  },
  {
    slug: 'vero-beach',
    name: 'Vero Beach',
    state: 'FL',
    description: 'Vero Beach offers pristine beaches and excellent fishing opportunities in the Indian River Lagoon and Atlantic Ocean.',
    latitude: 27.6386,
    longitude: -80.3973,
    distanceFromStuart: '30 miles north',
    localAttractions: ['Sebastian Inlet', 'Indian River Lagoon', 'Vero Beach Pier'],
    fishSpecies: ['Redfish', 'Snook', 'Tarpon', 'Cobia', 'Spanish Mackerel', 'Pompano'],
    bestSeason: 'Spring and fall for best action, year-round opportunities',
  },
  {
    slug: 'port-st-lucie',
    name: 'Port St. Lucie',
    state: 'FL',
    description: 'Port St. Lucie provides easy access to both freshwater and saltwater fishing opportunities along the St. Lucie River and Atlantic coast.',
    latitude: 27.2730,
    longitude: -80.3582,
    distanceFromStuart: '10 miles west',
    localAttractions: ['St. Lucie River', 'Savannas Preserve State Park', 'Clover Park'],
    fishSpecies: ['Snook', 'Redfish', 'Largemouth Bass', 'Peacock Bass', 'Tarpon', 'Spotted Seatrout'],
    bestSeason: 'Year-round with seasonal variations',
  },
  {
    slug: 'fort-pierce',
    name: 'Fort Pierce',
    state: 'FL',
    description: 'Fort Pierce is known as the "Dive Capital" but also offers outstanding fishing in the Fort Pierce Inlet and surrounding waters.',
    latitude: 27.4467,
    longitude: -80.3256,
    distanceFromStuart: '15 miles north',
    localAttractions: ['Fort Pierce Inlet', 'Indian River Lagoon', 'Fort Pierce Beach'],
    fishSpecies: ['Snook', 'Redfish', 'Tarpon', 'Cobia', 'Kingfish', 'Tripletail'],
    bestSeason: 'Spring through fall for best results',
  },
  {
    slug: 'palm-city',
    name: 'Palm City',
    state: 'FL',
    description: 'Palm City sits along the St. Lucie River, offering fantastic brackish water fishing opportunities.',
    latitude: 27.1670,
    longitude: -80.2664,
    distanceFromStuart: '3 miles west',
    localAttractions: ['St. Lucie River', 'Leighton Park', 'Savannas Recreation Area'],
    fishSpecies: ['Snook', 'Redfish', 'Tarpon', 'Largemouth Bass', 'Spotted Seatrout', 'Jack Crevalle'],
    bestSeason: 'Year-round, with peak action spring and fall',
  },
  {
    slug: 'hobe-sound',
    name: 'Hobe Sound',
    state: 'FL',
    description: 'Hobe Sound offers pristine natural areas and excellent fishing in the Intracoastal Waterway and nearshore Atlantic.',
    latitude: 27.0586,
    longitude: -80.1364,
    distanceFromStuart: '10 miles south',
    localAttractions: ['Hobe Sound Beach', 'Jonathan Dickinson State Park', 'Intracoastal Waterway'],
    fishSpecies: ['Snook', 'Redfish', 'Tarpon', 'Spotted Seatrout', 'Pompano', 'Spanish Mackerel'],
    bestSeason: 'Spring and fall for optimal fishing',
  },
  {
    slug: 'sebastian',
    name: 'Sebastian',
    state: 'FL',
    description: 'Sebastian is home to the famous Sebastian Inlet, one of the most productive fishing spots on Florida\'s east coast.',
    latitude: 27.8164,
    longitude: -80.4706,
    distanceFromStuart: '35 miles north',
    localAttractions: ['Sebastian Inlet State Park', 'Indian River Lagoon', 'Pelican Island'],
    fishSpecies: ['Snook', 'Redfish', 'Tarpon', 'Bluefish', 'Spanish Mackerel', 'Flounder'],
    bestSeason: 'Year-round, exceptional during migrations',
  },
  {
    slug: 'tequesta',
    name: 'Tequesta',
    state: 'FL',
    description: 'Tequesta offers access to the Loxahatchee River and Jupiter Inlet, providing diverse fishing opportunities.',
    latitude: 26.9581,
    longitude: -80.0989,
    distanceFromStuart: '18 miles south',
    localAttractions: ['Loxahatchee River', 'Jupiter Inlet', 'Coral Cove Park'],
    fishSpecies: ['Snook', 'Tarpon', 'Goliath Grouper', 'Redfish', 'Jack Crevalle', 'Ladyfish'],
    bestSeason: 'May-October for inshore, November-April for nearshore',
  },
]

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug)
}

export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug)
}
