/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { useSelector } from "react-redux";
import {Grid,Container, Box,withWidth} from '@material-ui/core';

import MainForm from '../../components/MainForm/MainForm.component';
import UserTable from '../../components/UserTable/UserTable.component';
import UserTable_Siderbar_Container from '../../components/UserTable_Sidebar/UserTable_Siderbar_Container.component';
import UserPage from '../UserPage/User.page';
import useUsersPageStyles from './UsersPage.styles';

const UsersPage = (props) => {
    const {width} = props;
    const classes = useUsersPageStyles();
    const user = useSelector((state) => state.userData);
    return(
        <Box className={classes.usersPage__container}>
            <Container>

            <Box className={classes.usersPage_form}>
                    <MainForm {...props}/>
            </Box>

            <Grid container spacing={2}>
                <Grid item md={3} xs='auto'>
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
