import React from "react";
import {useDispatch } from "react-redux";
import requestUserData from '../redux/actionCreator/userActionCr';

const User = (props) => {
  const dispatch = useDispatch();
  const {data} = props;
  return (
    <>
      {/* <Link to={`/${data.login}`} className="user--link-container"> */}
      <div onClick={()=>{props.history.push('/');dispatch(requestUserData(data.login))}}>
        <div className="user" >
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
        </div>
      {/* </Link> */}
    </>
  );
};

export default User;
