import { makeStyles } from "@material-ui/core";

const useUserTableSidebarStyles = makeStyles(theme => ({
    userTable_Sidebar:{
        height:'100vh',
        overflowY:'scroll',
        width: 'min(80%,17rem)',
        position:'fixed',
        top:'0',
        left:'0',
        zIndex:'1000'
    },
    userTable_Sidebar_container:{
        background:'rgba(0,0,0,0.7)',
        position:'fixed',
        width:'100vw',
        height:'100vh',
        top:'0',
        left:'0',
        zIndex:'100'
    },
    sidebarCloseButton__container:{
        position: 'fixed',
        top: '1.5rem',
        left: 'min(69vw,15.5rem);',
        transform: 'rotate(90deg)'
    },
    sidebarClose__Button:{
        clipPath: 'polygon(11% 0, 89% 0, 100% 100%, 0 100%)',
        padding: '.7rem 1.5rem;',
    },
}));

  export default useUserTableSidebarStyles;