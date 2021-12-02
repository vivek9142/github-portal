import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {changeQueryWithUser} from '../redux/actionCreator/searchActionCr';

const UserPage = (props) => {
  const dispatch = useDispatch();
  let user;
  if(!props.internal){
    user = props.match.params.name;
  }
  else user = props.user;

  React.useLayoutEffect(() => {
    console.log(props.external);
    if(props.external){
      dispatch(changeQueryWithUser({query:user},props.external))  
    }
    // dispatch(requestUserData(user))
  }, [props.external,dispatch,user]);

  const userData =  useSelector(state => state.userData.user);
  
  if (!userData) {
    return <></>;
  }
  return (
    <>
      {/* <h1>hi</h1> */}
      {/* <a href={userData.html_url} className="user--link-container"> */}
      <div className="user">
        <div className="user--title-container">
          <h2 className="user--title-container">{userData.name}</h2>
        </div>
        <div className="user--bio-container">
          <p className="user--bio">{userData.bio}</p>
        </div>
        <div className="user--img-container" style={{ width: "10rem" }}>
          <img
            src={userData.avatar_url}
            style={{ width: "100%" }}
            alt=""
            className="user--img"
          />
        </div>

        <div className="user--visit-github">
          <a
            href={`${userData.html_url}`}
            target="_blank"
            rel="noreferrer"
            className="user--visit-github-link"
          >
            Visit Github
          </a>
        </div>
      </div>
      {/* </a> */}
    </>
  );
};

export default UserPage;
