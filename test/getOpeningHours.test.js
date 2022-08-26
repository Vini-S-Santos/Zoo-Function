const getOpeningHours = require('../src/getOpeningHours');

const noParamObject = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

describe('Testes da função getOpeningHours', () => {
  it('Testa sem argumentos', () => {
    expect(getOpeningHours()).toEqual(noParamObject);
  });
  it('Testa Monday 07:00-AM', () => {
    expect(getOpeningHours('Monday', '07:00-AM')).toBe('The zoo is closed');
  });

  it('Testa Tuesday 08:00-AM', () => {
    expect(getOpeningHours('Tuesday', '08:00-AM')).toBe('The zoo is open');
  });

  it('Testa Wednesday 07:00-PM', () => {
    expect(getOpeningHours('Wednesday', '07:00-PM')).toBe('The zoo is closed');
  });

  it('Testa Segunda 09:00-AM', () => {
    expect(() => getOpeningHours('Segunda', '09:00-AM')).toThrowError('The day must be valid. Example: Monday');
  });

  it('Testa argumento fora de AM PM', () => {
    expect(() => getOpeningHours('Friday', '09:00-PA')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Testa se passar letra ao invez de hora', () => {
    expect(() => getOpeningHours('Saturday', 'A:00-AM')).toThrowError('The hour should represent a number');
  });

  it('Testa se passar letra ao invez de minuto', () => {
    expect(() => getOpeningHours('Sunday', '08:AA-AM')).toThrowError('The minutes should represent a number');
  });

  it('Testa se passar 15:00', () => {
    expect(() => getOpeningHours('Monday', '15:00-AM')).toThrowError('The hour must be between 0 and 12');
  });

  it('Testa se passar minutos a mais', () => {
    expect(() => getOpeningHours('Tuesday', '08:60-AM')).toThrowError('The minutes must be between 0 and 59');
  });
});
