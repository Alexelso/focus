import React from 'react';
import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import {Switch, Route} from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';

function App () {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/" component={AboutUs} />
        <Route exact path="/work" component={OurWork} />
        <Route path="/work/:id" component={MovieDetail} />
        <Route path="/contact" component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;
