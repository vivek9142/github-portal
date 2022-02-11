/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import MainForm from '../../components/MainForm/MainForm.component';
import UserTable from '../../components/UserTable/UserTable.component';
import UserTable_Siderbar_Container from '../../components/UserTable_Sidebar/UserTable_Siderbar_Container.component';
import UserPage from '../UserPage/User.page';
import {Grid,Container, Box,withWidth} from '@material-ui/core';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/styles';

const UsersPage = (props) => {
    const {width} = props;
    const classes = useStyles();
    const user = useSelector((state) => state.userData);
    return(
        <Box className={classes.usersPage__container}>
            <Container>

            <Box className={classes.usersPage_form}>
                    <MainForm {...props}/>
            </Box>

            <Grid container spacing={2}>
                <Grid item md={3} xs={'false'}>
                    <Box className={classes.usersPage__table} display={['xs','sm'].includes(width) ? 'none': 'block'}>
                    <UserTable />
                    </Box>

                    <Box className={classes.usersPage__table_mobile} display={['xs','sm'].includes(width) ? 'block': 'none'}>
                    <UserTable_Siderbar_Container />
                    </Box>
                </Grid>

                <Grid item md={9} xs={12}>
                    <Box className={classes.usersPage__table_contents}>
                    {user.user && !user.external  ? <UserPage user={user.user.login} internal/> : <></>}
                    </Box>
                </Grid>
                
            </Grid>
        
        </Container>
        </Box>
    )
};

export default withWidth()(UsersPage);

const useStyles = makeStyles(theme =>({
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