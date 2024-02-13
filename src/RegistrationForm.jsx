import { React, useState } from "react";
import "./RegistrationForm.css";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
//stop tut 27
const initialValues = {
  name: "",
  email: "",
  channel: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumber: ["", ""],
  phNumber: [""],
};
//values clean

/////

const Values = {
  name: "mmmmmm",
  email: "sss@sss.ss",
  channel: "ss",
  address: "ffefe",
  comment: "hello",
  social: {
    facebook: "ef",
    twitter: "fef",
  },
  phoneNumber: ["f", ""],
  phNumber: [""],
};
//////
const onSubmit = (values, submitProps) => {
  alert("succes");
  console.log("Form data", values);
  submitProps.setSubmitting(false);
  submitProps.resetForm();
};
const comments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email Format").required("Required"),
  channel: Yup.string().required("Required"),
  address: Yup.string().required("L'addresse est Obligatoire"),
  social: Yup.object().shape({
    facebook: Yup.string().required("fb_Required!!!"),
    twitter: Yup.string().required("tw_Required!!!"),
  }),
  phoneNumber: Yup.array()
    .min(1)
    .required("at least one item needs to be here"),
  comment: Yup.string().required("textArea-required"),
});

function RegistrationForm() {
  const [formValue, setFormValues] = useState(null);
  return (
    <Formik
      initialValues={formValue || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      //   validateOnMount
      // validateOnChange={false}
      // validateOnBlur={false}
    >
      {/* {(formik) => {
        console.log("props formik", formik); */}
      return (
      <Form className="form-registration">
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" id="name" autoComplete="off" />

        <ErrorMessage name="name" component={TextError} />

        <label htmlFor="email">E-mail</label>
        <Field type="email" name="email" id="email" autoComplete="off" />

        <ErrorMessage name="email" component={TextError} />

        <label htmlFor="channel">Channel</label>
        <Field type="text" name="channel" id="channel" autoComplete="off" />

        <ErrorMessage name="channel" component={TextError} />

        <label htmlFor="address">Address</label>
        <Field name="address">
          {(props) => {
            const { field, meta } = props;
            console.log("Render props", props);
            return (
              <div>
                <input type="text" id="address" {...field} />
                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
              </div>
            );
          }}
        </Field>
        <label htmlFor="facebook">Facebook</label>
        <Field type="text" name="social.facebook" id="facebook" />

        <ErrorMessage name="social.facebook" component={TextError} />

        <label htmlFor="twitter">Twitter</label>
        <Field type="text" name="social.twitter" id="twitter" />

        <ErrorMessage name="social.twitter" component={TextError} />

        <label htmlFor="primaryPh">Primary phone number</label>
        <Field type="text" id="primaryPh" name="phoneNumber[0]" />

        <ErrorMessage name="phoneNumber[0]" component={TextError} />

        <label htmlFor="comment">Textarea</label>
        <Field as="textarea" name="comment" id="comment" validate={comments} />
        <ErrorMessage name="comment" component={TextError} />

        <label htmlFor="secondaryPh">Secondary phone number</label>
        <Field type="text" id="secondaryPh" name="phoneNumber[1]" />
        {/* <ErrorMessage name="phoneNumber[1]" component={TextError} /> */}

        <FieldArray name="phNumber">
          {(fieldArrayProps) => {
            console.log("fieldArrayProps", fieldArrayProps);
            const { push, remove, form } = fieldArrayProps;
            const { values } = form;
            const { phNumber } = values;
            return (
              <div>
                {phNumber.map((phNumbr, index) => (
                  <div key={index}>
                    <Field name={`phNumber[${index}]`} />
                    {index > 0 && (
                      <button type="button" onClick={() => remove(index)}>
                        {""}-{""}
                      </button>
                    )}
                    <button type="button" onClick={() => push("")}>
                      {""}+{""}
                    </button>
                  </div>
                ))}
              </div>
            );
          }}
        </FieldArray>
        {/* <button
              type="button"
              onClick={() => formik.validateField("comment")}
            >
              Validate comments
            </button>
            <button type="button" onClick={() => formik.validateForm()}>
              Validate all
            </button>
            <button
              type="button"
              onClick={() => formik.setFieldTouched("comment")}
              // onClick={() => formik.resetForm()}
            >
              Visite comment
            </button>
            <button
              type="button"
              onClick={() =>
                formik.setTouched({
                  name: true,
                  channel: true,
                  email: true,
                  comment: true,
                  social: { twitter: true, facebook: true },
                })
              }
            >
              Visit all(TouchAll)
            </button> */}
        <button
          type="button"
          // disabled={!formik.isValid}
          onClick={() => setFormValues(Values)}
        >
          Load Saved Data
        </button>
        <button
          type="submit"
          // disabled={!formik.isValid}
          // disabled={formik.isSubmitting}
        >
          Submit
        </button>
      </Form>
      );
      {/* }} */}
    </Formik>
  );
}

export default RegistrationForm;
