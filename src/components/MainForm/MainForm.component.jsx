import { Formik, Form, Field } from "formik";
import { Grid,Container,Typography, Button } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import {changeQuery} from "../../redux/actionCreator/searchActionCr";
import { resetUserData } from "../../redux/actionCreator/userActionCr";
import TextFieldWrapper from "../FormsUI/TextField.component";
const MainForm = (props) => {
  
  const dispatch = useDispatch();
  const { query, per_page, order } = useSelector((state) => state.query);

  const redirectFunc = () => {
    if(props.onRedirect) props.onRedirect();
  }
  if(!query && !per_page && !order) return <></>
  
  return (
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
              <Grid item lg={3} md={3} sm={12}>
                <TextFieldWrapper name='query' label='query'/>
              </Grid>
              <Grid item lg={3} md={3} sm={5}>
                <TextFieldWrapper name='per_page' label='Results'/>
              </Grid>
              <Grid item lg={3} md={3} sm={5}>
                
                <TextFieldWrapper name='order' label='order'/>
              </Grid>
              <Grid item lg={3} md={3} sm={12}>
              <Button type="submit" variant='contained' color='primary'>
                Submit
              </Button>
              </Grid>
          </Grid>
          {/* <Field
            type="text"
            name="query"
            placeholder="Enter Query"
            {...props}
          /> */}
          
          {/* <Field type="number" name="per_page" placeholder="Total Results" />
          <Field as="select" name="order">
            <option value="Asc">Asc</option>
            <option value="Desc">Desc</option>
          </Field> */}
          {/* <input type="submit" /> */}
        </Form>
      )}
    </Formik>
  );
};

export default MainForm;
