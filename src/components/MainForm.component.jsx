import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import changeQuery from "../redux/action/searchActionCr";

const MainForm = (props) => {
  const dispatch = useDispatch();
  const { query, per_page, order } = useSelector((state) => state.query);
  return (
    <Formik
      initialValues={{
        query: query,
        per_page: per_page,
        order: order
      }}
      onSubmit={(val) => dispatch(changeQuery(val))}
    >
      {(formik) => (
        <Form>
          <Field
            type="text"
            name="query"
            placeholder="Enter Query"
            {...props}
          />
          <Field type="number" name="per_page" placeholder="Total Results" />
          <Field as="select" name="order">
            <option value="Asc">Asc</option>
            <option value="Desc">Desc</option>
          </Field>
          <input type="submit" />
        </Form>
      )}
    </Formik>
  );
};

export default MainForm;
