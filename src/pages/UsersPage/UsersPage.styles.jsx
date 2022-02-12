import { makeStyles } from "@material-ui/core";

const useUsersPageStyles =  makeStyles(theme =>({
    usersPage_form:{
        position: 'fixed',
        width: '98vw',
        padding: '1.5rem .8rem 1rem',
        top: '0rem',
        left:'0',
        zIndex: '11',
        background: theme.palette.background.default,
        // maxWidth:'90%',
        color: '#fff'
    },
    usersPage__table:{
        height: '84vh',
        overflowY: 'scroll',
        position: 'fixed',
        background: theme.palette.background.default,
        width: '21%',
        marginTop: '5rem',
        zIndex: '9',
    },
    usersPage__table_contents:{
        marginTop: '5rem',    
        background: theme.palette.background.default,
        height:'max-content',
        marginLeft:'7rem',
        minHeight: '87.5vh',
        
        [theme.breakpoints.down('md')]: {
            marginLeft:'0',
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft:'1.5rem',
            marginTop: '8rem', 
        },
        [theme.breakpoints.down('xs')]: {
            // marginLeft:'1.5rem',
            // marginTop: '8rem', 
            width:'90%'
        },
    },
    usersPage__container:{
        background: theme.palette.background.default,
    }
}));

  export default useUsersPageStyles;