import React from "react";
import {useDispatch } from "react-redux";
import {requestUserData} from '../../redux/actionCreator/userActionCr';
import { Card,CardMedia,CardContent,Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  cardMargin:{
    marginBottom:'1rem'
  }
}));

const User = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {data} = props;

  
  return (
    <>
      {/* <Link to={`/${data.login}`} className="user--link-container"> */}
      <Card className={classes.cardMargin} onClick={()=>{props.history.push('/users/');dispatch(requestUserData(data.login))}}>
        <div className="user" >

            <Grid  container>
              <Grid item xs={4}>
              <CardMedia>
            {/* <div className="user--img-container" style={{ width: "10rem" }}> */}
              <img
                src={data.avatar_url}
                style={{ width: "100%" ,height:"100%",objectFit:'cover'}}
                alt=""
                className="user--img"
              />
            {/* </div> */}
            </CardMedia>
              </Grid>
              <Grid item xs={8}>
              <CardContent>
            <div className="user--title-container">
            <h2 className="user--title-container">{data.login}</h2>
            </div>
            </CardContent>
              </Grid>
            
            </Grid>
          
          
        </div>
        </Card>
      {/* </Link> */}
    </>
  );
};

export default User;
