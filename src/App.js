import "./components/styles.css";
import MainForm from "./components/MainForm.component.jsx";
import UserTable from "./components/UserTable.component";
import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserPage from "./pages/User.Page";

export default function App() {
  const user = useSelector((state) => state.userData);

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <MainForm />
        <UserTable />
        {user.user && !user.external  ? <UserPage user={user.login} internal/> : <></>}
      </div>

      <Switch>
        <Route path="/" exact />
        <Route path="/:name" render={(props)=><UserPage external {...props}/>} exact />
      </Switch>
    </BrowserRouter>
  );
}
