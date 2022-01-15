import { useLayoutEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {Accordion,AccordionSummary,AccordionDetails,Typography} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { changeQueryWithUser } from '../../redux/actionCreator/searchActionCr';
import { resetUserData } from '../../redux/actionCreator/userActionCr';

const  Repos = props => {
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
              <Typography>
                Language: {data.language}
                {data.description}
                <a href={data.html_url} target="_blank"
                rel="noreferrer" className="user__repo--link">Visit Repo</a>
              </Typography>
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