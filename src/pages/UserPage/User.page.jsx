import React from "react";
import { useSelector } from "react-redux";
import { Container,Avatar, List,ListItem,ListItemAvatar,Button,Divider,Typography,Grid,ListItemText, ListSubheader} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Repos from "../../components/Repos/Repos.component";

const useStyles = makeStyles(theme => ({
  ListHeader:{
    fontSize:'1.5rem',
    position:'relative'
  },
  avatar:{
    width:'15rem',
    height:'15rem',
    borderRadius:'1rem'
  }
}));

const UserPage = (props) => {
  const classes = useStyles();
  
  let user;
  if(!props.internal){
    user = props.match.params.name;
  }
  else user = props.user;
  

  const userData =  useSelector(state => state.userData.user);
  
  
  if (!userData) {
    return <></>;
  }
  return (
    <>
      
      <div className="user">
        
      <List className="user--title-container" subheader={
        <ListSubheader component='div' className={classes.ListHeader} id='nested-list-subheader'>
          {userData.name}
        </ListSubheader>
      }>
        <ListItem>
          <Grid container>
            <Grid item xs={6}>
                <ListItemAvatar >
              <Avatar
                   className={classes.avatar} src={userData.avatar_url}
                alt=""
              />
              </ListItemAvatar>
              <Container>
              <Button variant="contained" target="_blank" href={`${userData.html_url}`}>
                Visit Github
              </Button>
              </Container>
            </Grid>

            <Grid item xs={6}>
                <List>
                  <ListItem>
                  <ListItemText>Username </ListItemText> <ListItemText>{userData.login}</ListItemText>
                  </ListItem>

                  <Divider />

                  <ListItem>
                    <ListItemText>Followers </ListItemText>
                   <ListItemText>{userData.followers}</ListItemText>
                  </ListItem>

                  <Divider />

                  <ListItem>
                  <ListItemText>Following </ListItemText>
                  <ListItemText>{userData.following}</ListItemText>
                  </ListItem>

                  <Divider />

                  <ListItem>
                      <Grid container>
                        <Grid item xs={4}>
                        <ListItemText>About </ListItemText>
                        </Grid>
                        <Grid item xs={8}>
                        <ListItemText>{userData.bio}</ListItemText>
                        </Grid>
                      </Grid>
                  
                  
                  </ListItem>
                </List>
                
            </Grid>
          </Grid>
          
        </ListItem>
      </List>
        <div className="user__repo--container">
              <Typography heading='h4'>Repositories</Typography>
              <Repos user={user} external={props.external}/>
        </div>
      </div>
    </>
  );
};

export default UserPage;
