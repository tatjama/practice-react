import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
//Components
//import Count from './Components/Count';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';

function App() {
  return (
    <div className="App">
      
      <Router>

        <Header/> 

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About/> 
            </Route>
            <Route path="/products/:id">
              <Product/>
            </Route>
          </Switch>
        </div>

        <Footer/>

      </Router>
    </div>
  );
}

export default App;
