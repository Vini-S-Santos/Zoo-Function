const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa count', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Testa names', () => {
    expect(handlerElephants('names')).toEqual(expect.arrayContaining(['Ilana']));
  });

  it('Testa averageAge', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('Testa location', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('Testa popularity', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });

  it('Testa availability', () => {
    expect(handlerElephants('availability')).toEqual(expect.arrayContaining(['Friday']));
  });

  it('Testa sem argumento', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Testa com objeto vazio', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Testa um argumento não existente', () => {
    expect(handlerElephants('pintado')).toBeNull();
  });
});
