import { TableSortPage } from './app.po';

describe('table-sort App', () => {
  let page: TableSortPage;

  beforeEach(() => {
    page = new TableSortPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
