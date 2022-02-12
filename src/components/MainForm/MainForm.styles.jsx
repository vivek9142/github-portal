import { makeStyles } from "@material-ui/core";

const useMainFormStyles = makeStyles(theme => ({
    button__darkTheme:{
      color:theme.palette.common.white
    },
    button__lighTheme:{
      color:theme.palette.common.black
    }
  }));

  export default useMainFormStyles;