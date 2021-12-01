import React from "react";
import { Link } from "react-router-dom";

const UserTable = ({ data }) => {
  return (
    <>
      <Link to={`/${data.login}`} className="user--link-container">
        <div className="user">
          <div className="user--title-container">
            <h2 className="user--title-container">{data.login}</h2>
          </div>
          <div className="user--img-container" style={{ width: "10rem" }}>
            <img
              src={data.avatar_url}
              style={{ width: "100%" }}
              alt=""
              className="user--img"
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default UserTable;
