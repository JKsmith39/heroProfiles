import { SuperHeroProfilesPage } from './app.po';

describe('super-hero-profiles App', function() {
  let page: SuperHeroProfilesPage;

  beforeEach(() => {
    page = new SuperHeroProfilesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
