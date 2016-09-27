import { OngbookPage } from './app.po';

describe('ongbook App', function() {
  let page: OngbookPage;

  beforeEach(() => {
    page = new OngbookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
