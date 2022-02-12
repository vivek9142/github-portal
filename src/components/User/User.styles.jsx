import { makeStyles } from "@material-ui/core";
const useUserStyles = makeStyles(theme => ({
    cardMargin:{
      marginBottom:'1rem',
      marginRight:'.5rem'
    },
    user__title_container:{
      wordWrap:'break-word'
    },
    user:{
      transition:'all 0.3s ease-out',
      '&:hover':{
          background: theme.palette.primary.light,
          color: theme.palette.background.default,
      }
    }
  }));

  export default useUserStyles;