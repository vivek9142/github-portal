import "./components/styles.css";
import {CssBaseline} from '@material-ui/core';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import UserPage from "./pages/UserPage/User.page";
import HomePage from "./pages/HomePage/HomePage.page";
import UsersPage from "./pages/UsersPage/Users.page";
import {withTheme} from './components/Theme/Theme';

function App() {

  return (
    <BrowserRouter>
          <div className="App">  
            <CssBaseline/>      
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path='/users/' exact component={UsersPage}/>
            <Route path="/users/:name" exact  render={(props)=><UserPage external {...props}/>} />
          </Switch>
          </div>
    </BrowserRouter>
  );
}

export default withTheme(App);