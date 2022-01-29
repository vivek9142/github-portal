import React from 'react';
import MainForm from '../../components/MainForm/MainForm.component';
import UserTable from '../../components/UserTable/UserTable.component';
import UserPage from '../UserPage/User.page';
import {Grid,Container, Box} from '@material-ui/core';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/styles';

const UsersPage = (props) => {
    const classes = useStyles();
    const user = useSelector((state) => state.userData);
    return(
        <Box className={classes.usersPage__container}>
            <Container>

            <Box className={classes.usersPage_form}>
                    <MainForm />
            </Box>

            <Grid container spacing={2}>
                <Grid item md={3} sm={5}>
                    <Box className={classes.usersPage__table}>
                    <UserTable />
                    </Box>
                </Grid>

                <Grid item md={9} sm={7}>
                    <Box className={classes.usersPage__table_contents}>
                    {user.user && !user.external  ? <UserPage user={user.user.login} internal/> : <></>}
                    </Box>
                </Grid>
                
            </Grid>
        
        </Container>
        </Box>
    )
};

export default UsersPage;

const useStyles = makeStyles(theme =>({
    usersPage_form:{
        position: 'fixed',
        width: '100%',
        padding: '1.5rem 0 1rem',
        top: '0rem',
        zIndex: '11',
        background: theme.palette.background.default,
        // '#f3f0f0',
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
        marginLeft:'3rem',
        minHeight: '87.5vh'
    },
    usersPage__container:{
        background: theme.palette.background.default,
    }
}));