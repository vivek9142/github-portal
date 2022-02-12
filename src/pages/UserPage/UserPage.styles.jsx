import { makeStyles } from "@material-ui/core";

const useUserPageStyles = makeStyles(theme => ({
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

  export default useUserPageStyles;