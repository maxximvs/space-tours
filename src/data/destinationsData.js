import planet1 from '../assets/images/planet-1.png';
import planet2 from '../assets/images/planet-2.png';
import planet3 from '../assets/images/planet-3.png';

const destinationsData = [
  {
    id: 0,
    planetName: 'Atlas',
    firstDiscovered: '2045',
    discoveredBy: 'SpaceX',
    planetDescription:
      'A planet full of life and turquoise lagoons. Great destination for lovers of nature.',
    img: planet1
  },
  {
    id: 1,
    planetName: 'Prometheus',
    firstDiscovered: '2060',
    discoveredBy: 'NASA',
    planetDescription:
      'Deserty planet with great vistas and unusual rock formation due to different gravitational forces.',
    img: planet2
  },
  {
    id: 2,
    planetName: 'Cheon',
    firstDiscovered: '2052',
    discoveredBy: 'ESA',
    planetDescription:
      'Arid desert planet with a lava river flowing across the entire surface of the globe.',
    img: planet3
  }
];

export default destinationsData;
