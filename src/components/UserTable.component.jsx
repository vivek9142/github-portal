import React from "react";
import { useSelector } from "react-redux";
import User from "./User.component";
const UserTable = () => {
  const data = useSelector((state) => state.usersData.post);

  if (!data) {
    return <>Enter Search Terms</>;
  }
  return (
    <>
      {data.items.map((el) => {
        return <User data={el} key={el.id} />;
      })}
    </>
  );
};

export default UserTable;
