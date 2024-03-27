import { planet } from '../../data/Planets';
import Planet from './Planet';

class PlanetsRepository {
  constructor() {
    this.planets = [];
  }

  getAll() {
    return this.planets;
  }

  get(id) {
    return this.planets.find((planet) => planet.id === id);
  }

  add(planet) {
    this.planets.push(planet);
  }

  remove(id) {
    this.planets = this.planets.filter((planet) => planet.id !== id);
  }

  update(id, name, dominationData, color1, color2, population, location, rulerPlanet) {
    const planet = this.get(id);

    if (planet) {
      planet.name = name;
      planet.dominationData = dominationData;
      planet.color1 = color1;
      planet.color2 = color2;
      planet.population = population;
      planet.location = location;
      planet.rulerPlanet = rulerPlanet;
    }
    return planet;
  }
}

const planetsRepository = new PlanetsRepository();
const newPlanet = new Planet(planet.name, planet.dominationData, planet.color1, planet.color2, planet.population, planet.location, planet.rulerPlanet, planet.x, planet.y, planet.z);

planetsRepository.add(newPlanet);

export default planetsRepository;