import "./components/styles.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserPage from "./pages/UserPage/User.page";
import HomePage from "./pages/HomePage/HomePage.page";
import UsersPage from "./pages/UsersPage/Users.page";

export default function App() {

  return (
    <BrowserRouter>
      {/* <Container  maxWidth='lg'> */}
          <div className="App">        
            {/* <AppBar position='relative'>
              <Typography variant='h6' color='inherit' noWrap>GitHub Portal</Typography>
            </AppBar> */}

          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path='/users/' exact component={UsersPage}/>
            <Route path="/users/:name" exact  render={(props)=><UserPage external {...props}/>} />
          </Switch>
          </div>
        {/* </Container>  */}
    </BrowserRouter>
  );
}
