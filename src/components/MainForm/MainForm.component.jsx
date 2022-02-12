import { useState } from "react";
import { Formik, Form, } from "formik";
import { Grid,FormControlLabel,withWidth,Switch } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import {changeQuery} from "../../redux/actionCreator/searchActionCr";
import { resetUserData } from "../../redux/actionCreator/userActionCr";
import { makeStyles } from "@material-ui/styles";
import TextFieldWrapper from "../FormsUI/TextField.component";
import ButtonComp from '../ButtonComp/ButtonComp.component';

const MainForm = (props) => {
  const {width} = props;
  const [adv,setAdv] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { query, per_page, order } = useSelector((state) => state.query);

  const redirectFunc = () => {
    if(props.onRedirect) props.onRedirect();
  }

  const advHandler = () => {
    setAdv(state => !state);
  }
  console.log(width);
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
        dispatch(resetUserData());
        dispatch(changeQuery(val));
        redirectFunc();
      }}
    >
      {(formik) => (
        <Form>
          <Grid container spacing={2} alignItems="center">
            <Grid item lg={adv? 3 : 6 } md={adv?3:6} sm={adv?2:6} xs={adv?5:12}>
                  <TextFieldWrapper name='query' label='query'/>
            </Grid>
              {
               adv ? 
              (<>
                <Grid item lg={1} md={1} sm={2} xs={3}>
                  <TextFieldWrapper name='per_page' label='Results'/>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={4}>
                  <TextFieldWrapper name='order' label='order'/>
                </Grid>
              </>)
              :(<></>)
              }
              <Grid item lg={1} md={1} sm={2} xs={4}>
                    <ButtonComp onClick={advHandler} variant='outlined' color='primary'>
                    {adv ? 'Hide': '+Adv'}
                    </ButtonComp>
                  </Grid>

              <Grid item lg={2} md={2} sm={2} xs={4}>
              <ButtonComp type="submit" variant='contained' color='primary'>
                Submit
              </ButtonComp>
              </Grid>

              <Grid item lg={adv ?2:3} md={3} sm={2} xs={2}>
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

export default withWidth()(MainForm);

const useStyles = makeStyles(theme => ({
  button__darkTheme:{
    color:theme.palette.common.white
  },
  button__lighTheme:{
    color:theme.palette.common.black
  }
}));