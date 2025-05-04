import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3).max(50).required("Required"),
  number: Yup.string().min(3).max(50).required("Required"),
});

const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name:
          <Field name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <br />
        <label>
          Number:
          <Field name="number" />
          <ErrorMessage name="number" component="div" />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
