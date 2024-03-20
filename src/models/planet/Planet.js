export default class Planet {
  constructor(id, name, dominationData, color1, color2, population, location, galaxy, solarSistem, spatialCoordinates, rulerPlanet, x, y, z) {
    this.id = id;
    this.name = name;
    this.dominationData = dominationData;
    this.color1 = color1;
    this.color2 = color2;
    this.population = population;
    this.location = location;
    this.galaxy = galaxy;
    this.solarSistem = solarSistem;
    this.spatialCoordinates = spatialCoordinates;
    this.x = x;
    this.y = y;
    this.z = z;
    this.rulerPlanet = rulerPlanet;
  }
}