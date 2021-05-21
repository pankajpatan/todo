import { HashRouter  as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header'
import LoginScreen from './components/LoginScreen'
import RegisterScreen from './components/register'
import Todo from './components/todo'
import Logout from './components/logout'
const App = () => {
  return ( <div>
        <Router>
        <Header />
     
        <Switch>
        <Route path='/' component={Todo} exact />
          <Route path='/login' component={LoginScreen}  />
          <Route path='/signup' component={RegisterScreen}  />
          <Route path='/logout' component={Logout}  />
         
        </Switch>
      </Router>
  </div> );
}
 
export default App;