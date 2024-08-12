describe('Página Hola Mundo', () => {
  it('debería mostrar "Hola Mundo"', async () => {
    await page.goto('file://' + __dirname + '/../index.html');
    const text = await page.$eval('h1', el => el.textContent);
    expect(text).toBe('Hola Mundo');
  });
});
