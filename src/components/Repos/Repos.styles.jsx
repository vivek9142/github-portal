import { makeStyles } from "@material-ui/core";


const useReposStyles = makeStyles((theme)=>({
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
    },
    empty_repo__container:{
      display:'grid',
      placeItems:'center',
      height:'20vh',
    }
  }));

  export default useReposStyles;