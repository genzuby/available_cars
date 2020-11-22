import GlobalStyle from '../style/globalStyles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FilterProvider } from '../contexts/FilterContext';
import Footer from './Footer';
import Header from './Header';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <FilterProvider>
          <Header />
          <Route path="/" component={Main} exact />
          <Route path="/:stockNumber" component={Detail} />
          {/* <Route path="/notfound" component={NotFound} /> */}
          <Footer />
        </FilterProvider>
      </Router>
    </>
  );
}

export default App;
