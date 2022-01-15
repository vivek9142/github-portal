import React from 'react';
import MainForm from '../../components/MainForm/MainForm.component';
import UserTable from '../../components/UserTable/UserTable.component';
import UserPage from '../UserPage/User.page';
import {Grid,Container} from '@material-ui/core';
import { useSelector } from "react-redux";

import './UsersPage.styles.css';

const UsersPage = (props) => {
    const user = useSelector((state) => state.userData);
    return(
        <div className="usersPage__container">
            <Container>

            <div className="usersPage_form">
                    <MainForm />
            </div>

            <Grid container spacing={2}>
                <Grid item md={3} sm={5}>
                    <div className="usersPage__table">
                    <UserTable />
                    </div>
                </Grid>

                <Grid item md={9} sm={7}>
                    <div className="usersPage__table--contents">
                    {user.user && !user.external  ? <UserPage user={user.user.login} internal/> : <></>}
                    </div>
                </Grid>

                
            </Grid>
        
            
        
        
        </Container>
        </div>
    )
};

export default UsersPage;