import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import FindTvShows from './find-tv-shows';

test('with no shows, renders call to action', () => {
  render(<FindTvShows />);

  expect(screen.queryByPlaceholderText(/Search for a TVShow/i)).toBeVisible();

});
