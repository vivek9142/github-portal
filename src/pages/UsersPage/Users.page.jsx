import React from 'react';
import MainForm from '../../components/MainForm/MainForm.component';
import UserTable from '../../components/UserTable/UserTable.component';
import UserPage from '../UserPage/User.page';
import { useSelector } from "react-redux";

const UsersPage = (props) => {
    const user = useSelector((state) => state.userData);
    return(
        <div className="usersPage__container">
        <MainForm />
        <UserTable />
        {user.user && !user.external  ? <UserPage user={user.user.login} internal/> : <></>}
        </div>
    )
};

export default UsersPage;