import { render, screen } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Detail from './Detail';
import { Provider } from 'react-redux';
import { store } from '../../testUtil';
import { FavoritesProvider } from '../../contexts/FavoritesContext';
import { DetailInfoProvider } from '../../contexts/DetailInfoContext';

beforeEach(() => {
  const history = createMemoryHistory();
  const state = { prevPath: '/' };
  history.push('/', state);

  render(
    <Provider store={store}>
      <FavoritesProvider>
        <DetailInfoProvider>
          <Router history={history} initialEntries={['10096']}>
            <Route>{props => <Detail {...props} />}</Route>
          </Router>
        </DetailInfoProvider>
      </FavoritesProvider>
    </Provider>
  );
});

it('renders with context, router and redux store', () => {
  expect(screen.queryByTestId('detail')).toBeInTheDocument();
});
