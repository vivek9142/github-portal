import { Formik, Form, } from "formik";
import { Grid,Button,FormControlLabel,Switch } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import {changeQuery} from "../../redux/actionCreator/searchActionCr";
import { resetUserData } from "../../redux/actionCreator/userActionCr";
import TextFieldWrapper from "../FormsUI/TextField.component";
import { makeStyles } from "@material-ui/styles";

const MainForm = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { query, per_page, order } = useSelector((state) => state.query);

  const redirectFunc = () => {
    if(props.onRedirect) props.onRedirect();
  }
  if(!query && !per_page && !order) return <></>
  
  return (
    <>
    <Formik
      initialValues={{
        query: query,
        per_page: per_page,
        order: order
      }}
      onSubmit={(val) => {
        console.log(val);
        dispatch(resetUserData());dispatch(changeQuery(val));redirectFunc();
      }}
    >
      {(formik) => (
        <Form>
          <Grid container spacing={2}>
              <Grid item lg={3} md={3} sm={11}>
                <TextFieldWrapper name='query' label='query'/>
              </Grid>
              <Grid item lg={2} md={2} sm={3}>
                <TextFieldWrapper name='per_page' label='Results'/>
              </Grid>
              <Grid item lg={2} md={2} sm={3}>
                
                <TextFieldWrapper name='order' label='order'/>
              </Grid>
              <Grid item lg={2} md={2} sm={2}>
              <Button type="submit" variant='contained' color='primary'>
                Submit
              </Button>
              </Grid>

              <Grid item lg={2} md={3} sm={3}>
                <FormControlLabel
                  control={<Switch checked={props.darktheme} onChange={props.setDarkTheme} />}
                  label="Dark Mode" className={props.darktheme ? classes.button__darkTheme : classes.button__lighTheme}
                />
              </Grid>

          </Grid>
        </Form>
      )}
    </Formik>
    
    </>
  );
};

export default MainForm;

const useStyles = makeStyles(theme => ({
  button__darkTheme:{
    color:theme.palette.common.white
  },
  button__lighTheme:{
    color:theme.palette.common.black
  }
}));