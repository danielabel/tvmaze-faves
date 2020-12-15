import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import FindTvShows from './find-tv-shows';

test.skip('with no shows, renders call to action', () => {
  render(<FindTvShows />);
  const linkElement = screen.queryByText(/Search for a TV Show/i);
  expect(linkElement).toBeInTheDocument();
});
