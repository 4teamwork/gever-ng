import { KendoUiPage } from './app.po';

describe('kendo-ui App', function() {
  let page: KendoUiPage;

  beforeEach(() => {
    page = new KendoUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
