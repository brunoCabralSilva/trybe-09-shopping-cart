require('../mocks/fetchSimulator');
const fetchProducts = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {

  test('Verifica se FetchProducts retorna um objeto ao ser chamada', async () => {
    const resultado = await fetchProducts();
    const tipo = typeof (resultado);
    expect(tipo).toEqual('object');
  }
  );

  test('Verifica se FetchProducts possui nove chaves', async () => {
    const resultado = await fetchProducts();
    const tipo = Object.keys(resultado).length;
    expect(tipo).toBe(10);
  });

  test('Verifica se FetchProducts possui uma chave chamada results', async () => {
    const resultado = await fetchProducts();
    const tipo = Object.keys(resultado).includes('results');
    expect(tipo).toBe(true);
  });

  test('Verifica se a primeira posição de results possui uma chave chamada id', async () => {
    const resultado = await fetchProducts();
    const tipo = Object.keys(resultado.results[0]).includes('id');
    expect(tipo).toBe(true);
  });

  test('Verifica se a primeira posição de results possui uma chave chamada title', async () => {
    const resultado = await fetchProducts();
    const tipo = Object.keys(resultado.results[0]).includes('title');
    expect(tipo).toBe(true);
  });

  test('Verifica se a primeira posição de results possui uma chave chamada thumbnail', async () => {
    const resultado = await fetchProducts();
    const tipo = Object.keys(resultado.results[0]).includes('thumbnail');
    expect(tipo).toBe(true);
  });
});
