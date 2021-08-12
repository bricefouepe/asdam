import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
// import Services from './pages/Services/Services';
// import Products from './pages/Products/Products';
// import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' />
        <Route path='/products' />
        <Route path='/sign-up' />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
