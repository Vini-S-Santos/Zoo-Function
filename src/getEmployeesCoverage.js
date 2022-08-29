const data = require('../data/zoo_data');

const getName = data.employees.map((name) => {
  const eInfo = {
    id: name.id,
    fullName: `${name.firstName} ${name.lastName}`,
    species: name.responsibleFor.map((animal) =>
      data.species.find((info) => info.id === animal).name),
    locations: name.responsibleFor.map((animal) =>
      data.species.find((info) => info.id === animal).location),
  };
  return eInfo;
});

function getEmployeesCoverage(obj = getName) {
  const getCheck = getName.find((name) =>
    name.fullName.includes(obj.name) || name.id === obj.id);
  if (obj.name || obj.id) {
    if (!getCheck) {
      throw new Error('Informações inválidas');
    }
    return getCheck;
  }
  return obj;
}

module.exports = getEmployeesCoverage;
