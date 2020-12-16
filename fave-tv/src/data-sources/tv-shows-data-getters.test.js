import nock from 'nock';
import {jest} from '@jest/globals';
import * as shows from './tv-shows-data-getters';

// these tests are noisy
beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  jest.resetAllMocks();
});


describe('Show search', () => {

  function searchNock() {
    return nock('https://api.tvmaze.com')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true'
      })
      .get('/search/shows');
  }

  it('given a search term, gets search data json',  async () => {
    searchNock()
      .query({q: 'doctor'})
      .reply(200, [{hello: 'm'}]);

    expect(await shows.getShows('doctor')).toEqual([{hello: 'm'}]);
  });

  it('removes HTML from show.summary ',  async () => {
    searchNock()
      .query({q: 'doctor'})
      .reply(200, [{show: {summary: "<p></p>"}}, {show : { summary: "hahah<wuy>dfdf"}}]);

    expect(await shows.getShows('doctor')).toEqual([{show: {summary: "  "}}, {show : { summary: "hahah dfdf"}}]);
  });

  describe('Error cases', () => {
    it('deals with http error cases',  async () => {
      searchNock()
        .query({q: 'doctor'})
        .reply(400);

      await expect(shows.getShows('doctor'))
        .rejects
        .toThrow('failed to get data');
    });


    it('deals with network error cases',  async () => {
      searchNock()
        .query({q: 'doctor'})
        .replyWithError('something awful happened')

      await expect(shows.getShows('doctor'))
        .rejects
        .toThrow('failed to get data');
    });
  });
});

describe('Show details', () => {

  function showNock() {
    return nock('https://api.tvmaze.com')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true'
      })
      .get('/shows/101?embed[]=seasons&embed[]=cast');
  }

  it('given an id, gets show data json',  async () => {
    showNock()
      .reply(200, {hello: 101});

    expect(await shows.getShowDetails(101)).toEqual({hello: 101});
  });

  it('removes HTML from show.summary ',  async () => {
    showNock()
      .reply(200, {summary: '<p><p>'});

    expect(await shows.getShowDetails(101)).toEqual({summary: '  '});
  });

  describe('Error cases', () => {
    it('deals with http error cases',  async () => {
      showNock()
        .reply(400);

      await expect(shows.getShowDetails(101))
        .rejects
        .toThrow('failed to get data');
    });

    // this test is noisy
    it('deals with network error cases',  async () => {

      showNock()
        .replyWithError('something awful happened')

      await expect(shows.getShowDetails(101))
        .rejects
        .toThrow('failed to get data');

    });
  });
});
