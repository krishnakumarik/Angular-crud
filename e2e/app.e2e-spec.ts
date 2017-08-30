import { SimpleapponePage } from './app.po';

describe('simpleappone App', () => {
  let page: SimpleapponePage;

  beforeEach(() => {
    page = new SimpleapponePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
