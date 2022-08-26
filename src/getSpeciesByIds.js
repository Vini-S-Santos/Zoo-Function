const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const especies = ids === undefined ? [] : data
    .species.filter((species) => ids.includes(species.id));
  return especies;
}

module.exports = getSpeciesByIds;
