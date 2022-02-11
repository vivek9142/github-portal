import {useState} from 'react';
import { Button,Box,makeStyles } from '@material-ui/core';
import UserTableSidebar from './UserTableSidebar.component';

const UserTable_Siderbar_Container = props => {
    const classes = useClasses();
    const [showSidebar,setShowSidebar] = useState(false);
    const closeSidebar = () => setShowSidebar(false);
    const openSidebar = () => setShowSidebar(true);
    return (
    <Box className={classes.sidebarButton__container}>
        <Button variant='contained' color='primary' className={classes.sidebar__Button} onClick={openSidebar}>Show Users</Button>
        {showSidebar? (<UserTableSidebar onClose={closeSidebar}/>):(<></>)}
    </Box>
    );
}

export default UserTable_Siderbar_Container;

const useClasses = makeStyles(theme => ({
    sidebarButton__container:{
        position: 'fixed',
        top: '14rem',
        left: '-3rem',
        transform: 'rotate(90deg)'
    },
    sidebar__Button:{
        clipPath: 'polygon(11% 0, 89% 0, 100% 100%, 0 100%)',
        padding: '.7rem 1.5rem;',
    },
    }));  