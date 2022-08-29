const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal && animal.specie && animal.sex) {
    return data.species.find((type) => type.name === animal.specie)
      .residents.filter((type) => type.sex === animal.sex).length;
  }
  if (animal) {
    return data.species.find((type) => type.name === animal.specie).residents.length;
  }
  return data.species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
}

module.exports = countAnimals;
