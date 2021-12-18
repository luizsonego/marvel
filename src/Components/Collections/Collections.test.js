import renderer from 'react-test-renderer';
import React from 'react';
import Collections from '.';
import { BrowserRouter as Router } from "react-router-dom"
import { QueryClientProvider } from 'react-query';
import queryClient from '../../services/clientProvider';

test('CollectionsTest renders correctly', () => {
  jest.mock('react-query', () => ({ useQuery: () => ({ isLoading: false, error: {}, data: [], }), }));
  const tree = renderer.create(
    <QueryClientProvider client={queryClient}>
      <Router>
        <Collections uri={
          [
            {
              title: 'Title',
              thumbnail: {
                path: 'path/to/image',
                extension: 'jpg'
              }
            }
          ]
        } />
      </Router>
    </QueryClientProvider>
  ).toJSON();
});