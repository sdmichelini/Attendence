import { AttendencePage } from './app.po';

describe('attendence App', () => {
  let page: AttendencePage;

  beforeEach(() => {
    page = new AttendencePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
