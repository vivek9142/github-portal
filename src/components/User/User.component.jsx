import {useContext} from "react";
import {useDispatch } from "react-redux";
import {requestUserData} from '../../redux/actionCreator/userActionCr';
import { Card,CardMedia,CardContent,Grid } from "@material-ui/core";

import useUserStyles from './User.styles';
import {sidebarContext} from '../UserTable_Sidebar/UserTableContext';


const User = (props) => {
  let sidebarClosefunc = useContext(sidebarContext);;
  const classes = useUserStyles();
  const dispatch = useDispatch();
  const {data} = props;
  

  const clickHandler = () => {
    props.history.push('/users/');
    dispatch(requestUserData(data.login));
    if(sidebarClosefunc) sidebarClosefunc();
  }
  
  return (
    <>
      <Card className={classes.cardMargin} onClick={clickHandler}>
        <div className={classes.user} >

            <Grid  container>
              <Grid item xs={4}>
              <CardMedia>
              <img
                src={data.avatar_url}
                style={{ width: "5rem" ,height:"7rem",objectFit:'cover'}}
                alt=""
                className="user--img"
              />
            </CardMedia>
              </Grid>
              <Grid item xs={8}>
              <CardContent>
            <div className="user--title-container">
            <h2 className={classes.user__title_container}>{data.login}</h2>
            </div>
            </CardContent>
              </Grid>
            
            </Grid>
          
          
        </div>
        </Card>
    </>
  );
};

export default User;
