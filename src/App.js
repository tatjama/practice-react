import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
//Components
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';
import Products from './Views/Products';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      
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
            <Route exact path="/products">
              <Products/>
            </Route>
          </Switch>
        </div>

        <Footer/>

      </Router>
    </div>
  );
}

export default App;
