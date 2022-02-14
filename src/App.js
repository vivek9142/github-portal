import {CssBaseline} from '@material-ui/core';
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.page";
import UsersPage from "./pages/UsersPage/Users.page";
import {withTheme} from './components/Theme/Theme';

function App(origProps) {

  return (
    <Router basename={process.env.PUBLIC_URL}>
          <div className="App">  
            <CssBaseline/>      
          <Switch>
            <Route path="/" render={(props)=><HomePage {...props} {...origProps}/>} exact />
            <Route path='/users/' exact render={(props)=><UsersPage {...props} {...origProps}/>}/>
          </Switch>
          </div>
    </Router>
  );
}

export default withTheme(App);