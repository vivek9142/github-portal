import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {changeQueryWithUser} from '../../redux/actionCreator/searchActionCr';
import {resetUserData} from '../../redux/actionCreator/userActionCr';
import axios from 'axios';
import { Container,Avatar, List,ListItem,ListItemAvatar,Button,Divider,Typography,Grid,ListItemText, ListSubheader,Accordion,AccordionSummary,AccordionDetails } from "@material-ui/core";
import {ExpandLess,ExpandMore} from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  ListHeader:{
    fontSize:'1.5rem'
  },
  avatar:{
    width:'15rem',
    height:'15rem',
    borderRadius:'1rem'
  }
}));
const UserPage = (props) => {
  
  const classes = useStyles();

  const dispatch = useDispatch();
  const [userRepo,setUserRepo] =  React.useState([]);
  let user;
  if(!props.internal){
    user = props.match.params.name;
  }
  else user = props.user;
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
      // <List component='nav' subheader={
      //   <ListSubheader component='div' id='nested-list-subheader'>
          
      //   </ListSubheader>
      // }>

      // </List>  
    <div className="user__repo--item" key={data.id}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore/>} aria-controls={`panela${data.id}-content`}
          id={`panela${data.id}-header`}>
          <Typography heading='h6'>{data.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Language: {data.language}
            {data.description}
            <a href={data.html_url} target="_blank"
            rel="noreferrer" className="user__repo--link">Visit Repo</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  ))
  if (!userData) {
    return <></>;
  }
  return (
    <>
      
      <div className="user">
        
      <List component='nav' className="user--title-container" subheader={
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
                // style={{ width: "100%" }}
                alt=""
                // className="user--img"
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
              {repoArray}
        </div>
      </div>
      {/* </a> */}
    </>
  );
};

export default UserPage;
