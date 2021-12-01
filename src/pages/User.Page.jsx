import React from "react";
import axios from "axios";

const UserPage = (props) => {
  const user = props.match.params.name;
  console.log(user);
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    axios.get(`https://api.github.com/users/${user}`).then(
      (res) => {
        setData(res.data);
        console.log("userPage", res);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [user]);
  if (!data) {
    return <></>;
  }
  return (
    <>
      {/* <h1>hi</h1> */}
      {/* <a href={data.html_url} className="user--link-container"> */}
      <div className="user">
        <div className="user--title-container">
          <h2 className="user--title-container">{data.name}</h2>
        </div>
        <div className="user--bio-container">
          <p className="user--bio">{data.bio}</p>
        </div>
        <div className="user--img-container" style={{ width: "10rem" }}>
          <img
            src={data.avatar_url}
            style={{ width: "100%" }}
            alt=""
            className="user--img"
          />
        </div>

        <div className="user--visit-github">
          <a
            href={`${data.html_url}`}
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
