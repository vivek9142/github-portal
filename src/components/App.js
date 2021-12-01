import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./styles.css";
import requestData from "../redux/action/actionCreater";
import UserTable from "./UserTable.component";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestData());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <UserTable />
    </div>
  );
}
