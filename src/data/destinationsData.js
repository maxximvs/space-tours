import planet1 from '../assets/images/planet-1.png';
import planet2 from '../assets/images/planet-2.png';
import planet3 from '../assets/images/planet-3.png';

import sqrPlanet1 from '../assets/images/curioso-photography-1.jpg';
import sqrPlanet2 from '../assets/images/curioso-photography-2.jpg';
import sqrPlanet3 from '../assets/images/curioso-photography-3.jpg';

const destinationsData = [
  {
    id: 0,
    planetName: 'Atlas',
    firstDiscovered: '2045',
    discoveredBy: 'SpaceX',
    planetDescription:
      'A planet full of life and turquoise lagoons. Great destination for lovers of nature. The many magrove tree like plants make a great impression on people who visit the planet.',
    img: planet1,
    sqrImg: sqrPlanet1
  },
  {
    id: 1,
    planetName: 'Prometheus',
    firstDiscovered: '2060',
    discoveredBy: 'NASA',
    planetDescription:
      'Deserty planet with great vistas and unusual rock formation due to different gravitational forces. One of the many unique attractions the planet offers is a near zero gravity tour around floating rocks.',
    img: planet2,
    sqrImg: sqrPlanet2
  },
  {
    id: 2,
    planetName: 'Cheon',
    firstDiscovered: '2052',
    discoveredBy: 'ESA',
    planetDescription:
      'Arid desert planet with a lava river flowing across the entire surface of the globe. The immense heat from the core provides numerous hot springs and spas for relaxation.',
    img: planet3,
    sqrImg: sqrPlanet3
  }
];

export default destinationsData;
