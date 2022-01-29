import React from 'react';
import MainForm from '../../components/MainForm/MainForm.component';
import UserTable from '../../components/UserTable/UserTable.component';
import UserPage from '../UserPage/User.page';
import {Grid,Container, Box} from '@material-ui/core';
import { useSelector } from "react-redux";

import './UsersPage.styles.css';
import { makeStyles } from '@material-ui/styles';

const UsersPage = (props) => {
    const user = useSelector((state) => state.userData);
    return(
        <Box className="usersPage__container">
            <Container>

            <Box className="usersPage_form">
                    <MainForm />
            </Box>

            <Grid container spacing={2}>
                <Grid item md={3} sm={5}>
                    <Box className="usersPage__table">
                    <UserTable />
                    </Box>
                </Grid>

                <Grid item md={9} sm={7}>
                    <Box className="usersPage__table--contents">
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

}));