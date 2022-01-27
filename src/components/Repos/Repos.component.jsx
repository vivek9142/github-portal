import { useLayoutEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {Accordion,AccordionSummary,AccordionDetails,Typography,makeStyles,Box} from '@material-ui/core';
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
        <div className="user__repo--item" key={data.id}>
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
                rel="noreferrer" className="user__repo--link">Visit Repo</a>
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
          {repoArray}
          {state.userRepo.length > 4 && !state.clicked ? (<button onClick={clickHandler}>View All Repos</button>):(<></>)}
          </>
      )

};

export default Repos;

const useStyles = makeStyles(()=>({
  box__container:{
    margin:'0 1rem',
    justifyContent:'space-between'
  },
  lang__container:{flexBasis:'12rem'},
  desc__container:{flexBasis:'25rem'}
}));