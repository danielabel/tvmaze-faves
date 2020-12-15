import nock from 'nock';
import * as shows from './tv-shows-data-getters';


describe('Show search', () => {
  it('given a search term, gets search data json',  async () => {
    nock('https://api.tvmaze.com')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true'
      })
      .get('/search/shows')
      .query({q: 'doctor'})
      .reply(200, {hello: 'm'});

    expect(await shows.getShows('doctor')).toEqual({hello: 'm'});
  });

});

describe('Show details', () => {

  it('given an id, gets show data json',  async () => {
    nock('https://api.tvmaze.com')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true'
      })
      .get('/shows/101?embed[]=seasons&embed[]=cast')
      .reply(200, {hello: 101});

    // console.log(await shows.getShowDetails(101))
    expect(await shows.getShowDetails(101)).toEqual({hello: 101});
  });

});
