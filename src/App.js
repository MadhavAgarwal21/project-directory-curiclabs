//REACT
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';

//PAGES
import About from './constants/About';
import View from './constants/view';
import Home from './constants/home';

function App() {

  return (
    <>
      <Container fluid style={{ padding: '0px' }}>
        <BrowserRouter>
          <About />
          <Switch>
            <Route exact path="/view" component={View} />
            <Route component={Home} />
          </Switch>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;