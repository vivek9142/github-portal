import React from "react";
import { useSelector } from "react-redux";
import User from "../User/User.component";
import { withRouter } from "react-router";

const UserTable = (props) => {
  const data = useSelector((state) => state.usersData.users);

  if (!data) {
    return <>Enter Search Terms</>;
  }
  return (
    <>
      {data.items.map((el) => {
        return <User data={el} key={el.id} {...props}/>;
      })}
    </>
  );
};

export default withRouter(UserTable);
