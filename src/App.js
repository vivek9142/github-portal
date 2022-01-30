import "./components/styles.css";
import {CssBaseline} from '@material-ui/core';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import UserPage from "./pages/UserPage/User.page";
import HomePage from "./pages/HomePage/HomePage.page";
import UsersPage from "./pages/UsersPage/Users.page";
import {withTheme} from './components/Theme/Theme';

function App(props) {

  return (
    <BrowserRouter>
          <div className="App">  
            <CssBaseline/>      
          <Switch>
            <Route path="/" render={()=><HomePage {...props}/>} exact />
            <Route path='/users/' exact render={()=><UsersPage {...props}/>}/>
            <Route path="/users/:name" exact  render={()=><UserPage external {...props}/>} />
          </Switch>
          </div>
    </BrowserRouter>
  );
}

export default withTheme(App);