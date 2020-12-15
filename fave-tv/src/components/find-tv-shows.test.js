import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import FindTvShows from './find-tv-shows';

test('with no shows, renders call to action', () => {
  render(<FindTvShows />);
  const linkElement = screen.queryByText(/...ready to find your favourite tv shows.../i);
  expect(linkElement).toBeInTheDocument();
});
