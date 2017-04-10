import { DeletePage } from './app.po';

describe('delete App', () => {
  let page: DeletePage;

  beforeEach(() => {
    page = new DeletePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
