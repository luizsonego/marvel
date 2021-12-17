import renderer from 'react-test-renderer';
import React from 'react';
import CardUser from '.';
import { BrowserRouter as Router } from "react-router-dom"

test('CardUserTest renders correctly', () => {
  const tree = renderer.create(
    <Router>
      <CardUser character={{
        id: 1,
        name: 'Test',
        thumbnail: {
          path: 'path/to/image',
          extension: 'jpg'
        }
      }} />
    </Router>
  ).toJSON();
});