import GlobalStyle from '../style/globalStyles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Main />
        {/* <Route path="/" component={Main} exact />
        <Route path="/:id" component={Detail} />
        <Route path="/notfound" component={NotFound} /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
