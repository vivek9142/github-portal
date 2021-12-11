import "./components/styles.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserPage from "./pages/UserPage/User.page";
import HomePage from "./pages/HomePage/HomePage.page";
import UsersPage from "./pages/UsersPage/Users.page";

export default function App() {

  return (
    <BrowserRouter>
      <div className="App">        
      

      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path='/users/' component={UsersPage}/>
        <Route path="/:name" render={(props)=><UserPage external {...props}/>} exact />
      </Switch>
      </div>
    </BrowserRouter>
  );
}
