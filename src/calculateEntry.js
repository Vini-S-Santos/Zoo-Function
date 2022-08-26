const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const peoples = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((people) => {
    if (people.age < 18) {
      peoples.child += 1;
    }
    if (people.age >= 18 && people.age < 50) {
      peoples.adult += 1;
    }
    if (people.age >= 50) {
      peoples.senior += 1;
    }
  });
  return peoples;
}

function calculateEntry(entrants) {
  if (entrants === undefined || !entrants.length) { // retorna 0 se nenhum argumento for passado , retorna 0 se um objeto vazio for passado,
    return 0;
  }
  const total = countEntrants(entrants);
  const child = data.prices.child * total.child;
  const adult = data.prices.adult * total.adult;
  const senior = data.prices.senior * total.senior;
  const totalPrice = child + adult + senior;
  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };
