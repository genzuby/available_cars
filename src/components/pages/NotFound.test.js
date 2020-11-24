import { render, screen } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import NotFound from './NotFound';

beforeEach(() => {
  const history = createMemoryHistory();
  const state = { prevPath: '/' };
  history.push('/', state);

  render(
    <Router history={history}>
      <Route>
        <NotFound />
      </Route>
    </Router>
  );
});

it('renders with context, router and redux store', () => {
  expect(screen.queryByTestId('notFound')).toBeInTheDocument();
});
