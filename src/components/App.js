//@flow
import type { Node } from 'react';
import GlobalStyle from '../style/globalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FilterProvider } from '../contexts/FilterContext';
import { FavoritesProvider } from '../contexts/FavoritesContext';
import Footer from './Footer';
import Header from './Header';
import Main from './pages/Main';
import MyFavorites from './pages/MyFavorites';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';
import { DetailInfoProvider } from '../contexts/DetailInfoContext';

function App(): Node {
  return (
    <>
      <GlobalStyle />
      <Router>
        <FavoritesProvider>
          <FilterProvider>
            <DetailInfoProvider>
              <Header />
              <Switch>
                <Route path="/" component={Main} exact />
                <Route path="/favorites" component={MyFavorites} />
                <Route path="/notfound" component={NotFound} />
                <Route path="/:stockNumber" component={Detail} />
              </Switch>
              <Footer />
            </DetailInfoProvider>
          </FilterProvider>
        </FavoritesProvider>
      </Router>
    </>
  );
}

export default App;
