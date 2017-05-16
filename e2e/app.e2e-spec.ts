import { SubRoutingPage } from './app.po';

describe('sub-routing App', () => {
  let page: SubRoutingPage;

  beforeEach(() => {
    page = new SubRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
