import { makeStyles } from "@material-ui/core";

const useHomePageStyles = makeStyles(theme => ({
    gridMargin: {
        marginBottom:'2rem'
    },
    homepage__container:{
        background: theme.palette.background.default,
        '&>div' :{
            height: '100vh'
        }
    },
    mainForm__container:{
        width:'60rem',
        [theme.breakpoints.down('sm')]: {
            width:'100%',
          },
    }
}));

  export default useHomePageStyles;