import { TestApp20170809Page } from './app.po';

describe('test-app20170809 App', () => {
  let page: TestApp20170809Page;

  beforeEach(() => {
    page = new TestApp20170809Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
