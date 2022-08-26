const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((obj) => obj.managers.includes(id)); // some filtra se o objeto id tem manangers
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.filter((obj) => obj.managers
      .includes(managerId)).map((obj) => `${obj.firstName} ${obj.lastName}`); // Caso a pessoa seja gerente, retorne um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por essa pessoa.
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
