import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {changeQueryWithUser} from '../../redux/actionCreator/searchActionCr';
import {resetUserData} from '../../redux/actionCreator/userActionCr';
import axios from 'axios';

const UserPage = (props) => {
  console.log(props);

  const dispatch = useDispatch();
  const [userRepo,setUserRepo] =  React.useState([]);
  let user;
  if(!props.internal){
    user = props.match.params.name;
  }
  else user = props.user;
  console.log(user);
  React.useLayoutEffect(() => {
    console.log(props.external);
    if(props.external){
      dispatch(changeQueryWithUser({query:user},props.external));
      
    }
    axios.get(`https://api.github.com/users/${user}/repos`).then(res => setUserRepo(res.data));

    return ()=>{
      dispatch(resetUserData());
    }
  }, [props.external,dispatch,user]);

  const userData =  useSelector(state => state.userData.user);
  
  const repoArray = userRepo.map(data => (
    <div className="user__repo--item" key={data.id}>
      <div className="user__repo--title">
        <h4 className="user__repo--heading">{data.name}</h4>
      </div>
      <div className="user__repo--body">
        <div className="user__repo--meta">
          <span className="user__repo--lang">Language: {data.language}</span>
        </div>
        <div className="user__repo--description_container">
          <p className="user__repo--description">
            {data.description}
          </p>
        </div>
        <div className="user__repo--link--item">
          <a href={data.html_url} target="_blank"
            rel="noreferrer" className="user__repo--link">Visit Repo</a>
        </div>
      </div>
    </div>
  ))
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
          <div className="">followers: {userData.followers}</div>
          <div className="">following: {userData.following}</div>
          <a
            href={`${userData.html_url}`}
            target="_blank"
            rel="noreferrer"
            className="user--visit-github-link"
          >
            Visit Github
          </a>
        </div>
        <div className="user__repo--container">
              {repoArray}
        </div>
      </div>
      {/* </a> */}
    </>
  );
};

export default UserPage;
