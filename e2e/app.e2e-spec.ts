import { CadastroBasicoPage } from './app.po';

describe('cadastro-basico App', () => {
  let page: CadastroBasicoPage;

  beforeEach(() => {
    page = new CadastroBasicoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
