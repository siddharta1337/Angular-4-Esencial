import { Ejemplo1Page } from './app.po';

describe('ejemplo1 App', () => {
  let page: Ejemplo1Page;

  beforeEach(() => {
    page = new Ejemplo1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
