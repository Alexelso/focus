import React from 'react';
import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import {Switch, Route, useLocation} from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={AboutUs} />
          <Route exact path="/work" component={OurWork} />
          <Route path="/work/:id" component={MovieDetail} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
