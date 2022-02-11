import React from "react";
import { useSelector } from "react-redux";
import { Container,Avatar, List,ListItem,ListItemAvatar,Button,Divider,Grid,ListItemText, ListSubheader,Paper, Box} from "@material-ui/core";
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
    borderRadius:'1rem',
    [theme.breakpoints.down('sm')]:{
      width:'13rem',
      height:'13rem',
    },
    [theme.breakpoints.down('xs')]:{
      width:'11rem',
      height:'11rem',
    }
  },
  user__username:{
    [theme.breakpoints.down('xs')]:{
      display: 'flex',
      flexDirection: 'column'
    },
  },
  user__view_profile:{
    display: 'block',
    textAlign: 'center',
    margin:'0 6rem',
    [theme.breakpoints.down('sm')]:{
      margin:'0 4rem',
    },
    [theme.breakpoints.down('xs')]:{
      margin:'0 1rem',
    }
  },
  user__image_container:{
      display:'block',
    [theme.breakpoints.down('xs')]:{
      display: 'grid',
      placeItems: 'center'
    }
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
      
      <Box className="user">
      <Paper className={classes.user__metaData} elevation={2} >
        
      <List className="user--title-container">
        <ListItem>
          <Grid container>
            <Grid item md={4} sm={6} xs={12}>
            <ListSubheader component='div' className={classes.ListHeader} id='nested-list-subheader'>
          {userData.name}
        </ListSubheader>
                <ListItemAvatar className={classes.user__image_container}>
              <Avatar
                   className={classes.avatar} src={userData.avatar_url}
                alt=""
              />
              </ListItemAvatar>
            </Grid>

            <Grid item md={8} sm={6} xs={12}>
                <List>
                  <ListItem className={classes.user__username}>
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
                <Container>
              <Button className={classes.user__view_profile} variant="contained" color='primary' target="_blank" href={`${userData.html_url}`}>
                Visit Github
              </Button>
              </Container>
            </Grid>
          </Grid>
          
        </ListItem>
      </List>
      </Paper>
        <Box className="user__repo--container">
              <Repos user={user} external={props.external}/>
        </Box>
      </Box>
    </>
  );
};

export default UserPage;
