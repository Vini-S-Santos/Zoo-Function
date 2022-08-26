const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employ = employeeName === undefined ? {} : data
    .employees.find((name) => name.firstName === employeeName
|| name.lastName === employeeName);
  return employ;
}

module.exports = getEmployeeByName;
