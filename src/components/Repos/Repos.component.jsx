import { useLayoutEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {Accordion,AccordionSummary,AccordionDetails,Typography,makeStyles,Box, Button} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { changeQueryWithUser } from '../../redux/actionCreator/searchActionCr';
import { resetUserData } from '../../redux/actionCreator/userActionCr';

const  Repos = props => {
    const classes = useStyles();
    const dispatch = useDispatch(); 
    const [state,setState] =  useState({userRepo:[],clicked:false});

    useLayoutEffect(() => {
        if(props.external){
          dispatch(changeQueryWithUser({query:props.user},props.external));
        }
        axios.get(`https://api.github.com/users/${props.user}/repos`).then(res => setState(state => ({...state,userRepo:res.data})));
    
        return ()=>{
          dispatch(resetUserData());
        }
      }, [props.external,dispatch,props.user]);

      let slicedArray,mappingArray;

      const clickHandler = () =>{
        setState(state => ({...state,clicked:true}));
      }

      
      if(state.userRepo.length>4 && !state.clicked){
        slicedArray = state.userRepo.slice(0,4);
      }

       mappingArray = state.userRepo.length>4 && !state.clicked ? slicedArray : state.userRepo;

    const repoArray = mappingArray.map(data => (
        <div className={classes.user__repo_item} key={data.id}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>} aria-controls={`panela${data.id}-content`}
              id={`panela${data.id}-header`}>
              <Typography heading='h6'>{data.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box display='flex' width='100%' className={classes.box__container}>
                  <Box mr={1} className={classes.lang__container}>
                  <Typography component='h6'  display='inline'>Language:</Typography>
                  <Typography component='p' display='inline'>{data.language?data.language:'Not Specified'}</Typography>
                  </Box>

                  <Box mr={1} className={classes.desc__container}>
                  <Typography component='h6' display='inline'>Description:</Typography>
                  <Typography component='p' display='inline'>{data.description?data.description:'Not Specified'}</Typography>
                  </Box>

                  <Box>
                  <Typography component='p'>
                  <a href={data.html_url} target="_blank"
                rel="noreferrer" className={classes.repoVisit_link}>
                  <Button variant="outlined"  color='primary' size='small'>Visit Repo</Button>
                  </a>
                    </Typography>
                  </Box>
                  
                </Box>
              
            </AccordionDetails>
          </Accordion>
        </div>
      ));

      if (!props.user) {
        return <></>;
      }

      return (
          <>
          <Box className={classes.repo__heading_container}>
              <Typography variant='h6'>Repositories</Typography>
              {state.userRepo.length > 4 && !state.clicked ? 
              (
              <Button size="small" color='primary' variant='outlined' onClick={clickHandler}>View All Repos</Button>
              ):(<></>)}
          </Box>
          
          {repoArray}
          </>
      )

};

export default Repos;

const useStyles = makeStyles((theme)=>({
  box__container:{
    margin:'0 1rem',
    flexDirection:'row',
    justifyContent:'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection:'column',
      wordBreak:'break-word',
      margin:'.5rem 0',
      gap:'1rem'
    }
  },
  lang__container:{
    flexBasis:'12rem',
    [theme.breakpoints.down('xs')]: {
      flexBasis:'0',
    },
  },
  desc__container:{
    flexBasis:'25rem',
    [theme.breakpoints.down('xs')]: {
      flexBasis:'0',
    },
  },
  user__repo_item:{
    margin: '0.5rem 0'
  },
  repo__heading_container:{
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    margin: '1.5rem 0',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      flexDirection:'column',
      gap:'.4rem'
    }
  },
  repoVisit_link:{
    '&,&:visited,&:active,&:hover':{
      color:'inherit',
      textDecoration:'none'
    }
  }
}));