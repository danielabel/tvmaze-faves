import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { ShowsTable } from './shows-table';
import showsData from "../test-data/shows-search-data.json";
import FindTvShows from "./find-tv-shows";

test('renders the shows in the data file',() => {
  render(<FindTvShows />);
  render(<ShowsTable shows={showsData} />);
  expect(screen.queryByText(/Doctor Doctor/i)).toBeVisible();
  expect(screen.queryByText(/Doctor Prisoner/i)).toBeVisible();
});
