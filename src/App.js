import './App.css';
import Header from './Header';
import Searchpage from './Searchpage';
import Sidebar from './Sidebar';
import Recommendedvideos from './Recommendedvideos';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
    <Router >
    <Header  />

    <Switch >
      <Route path='/' exact>
    <div className="app__page">
    <Sidebar />
    <Recommendedvideos  />

    </div>
      </Route>
      <Route path='/search/:search'  exact>
      <div className="app__page">
    <Sidebar />
    <Searchpage  />

    </div>
        
      </Route>
    </Switch>


    </Router>


    
    
 


    
      
     
    </div>
  );
}

export default App;
