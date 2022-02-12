import { createPortal } from "react-dom";
import { Paper,Button,Box } from "@material-ui/core";

import UserTable from "../UserTable/UserTable.component";
import useUserTableSidebarStyles from './UserTableSidebar.styles';

const sidebar = document.getElementById('sidebar');

const UserTable_Sidebar = (props) => {
    const classes = useUserTableSidebarStyles();
    
    return createPortal(
        <Box className={classes.userTable_Sidebar_container}>
            <Paper className={classes.userTable_Sidebar}>
                <Box className={classes.sidebarCloseButton__container}>
                <Button className={classes.sidebarClose__Button} variant='contained' color='primary' onClick={()=>props.onClose()}>close</Button>
                </Box>
                <UserTable />
            </Paper>
        </Box>,
        sidebar
    )
};

export default UserTable_Sidebar;