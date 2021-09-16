import './App.css';
import Nav from './components/Nav/Nav';
import Homescreen from './components/Homescreen/Homescreen';
import Productscreen from './components/Productscreen/Productscreen';
import Cartscreen from './components/Cart/Cartscreen';
import './bootstrap-grid.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <main>
        <Nav />
        <Switch>
          <Route exact path="/" component={ Homescreen } />
          <Route exact path="/product/:id" component={ Productscreen } />
          <Route exact path="/cart" component={ Cartscreen } />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
