import { useLayoutEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {Accordion,AccordionSummary,AccordionDetails,Typography} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { changeQueryWithUser } from '../../redux/actionCreator/searchActionCr';
import { resetUserData } from '../../redux/actionCreator/userActionCr';

const  Repos = props => {
    const dispatch = useDispatch(); 
    const [userRepo,setUserRepo] =  useState([]);

    useLayoutEffect(() => {
        console.log(props.external);
        if(props.external){
          dispatch(changeQueryWithUser({query:props.user},props.external));
        }
        axios.get(`https://api.github.com/users/${props.user}/repos`).then(res => setUserRepo(res.data));
    
        return ()=>{
          dispatch(resetUserData());
        }
      }, [props.external,dispatch,props.user]);

    const repoArray = userRepo.map(data => (
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
          </>
      )

};

export default Repos;