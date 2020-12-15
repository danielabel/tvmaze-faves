import * as favourites from './favourites-store';

describe('Show search', () => {
  it('saves a favourite id to local storeage and retrieves it',  async () => {
    favourites.save(10101);
    expect(favourites.has(10101)).toBe(true);
    expect(favourites.has(10102)).toBe(false);

  })
});
