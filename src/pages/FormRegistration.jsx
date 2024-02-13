import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
// import RegistrationForm from "./RegistrationForm";
import Textfield from "../components/Textfield";
import Select from "../components/Select";
import Checkbox from "../components/Checkbox";
import countries from "../data/countries.json";

import { Box, Grid, Typography } from "@material-ui/core";
import DateTimePicker from "../components/DataTimePicker";
import Button from "../components/Button";

function FormRegistration() {
  const VALIDATION = Yup.object().shape({
    firstname: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("Email Invalid"),
    phone: Yup.number()
      .integer()
      .typeError("Please enter Valid phone number")
      .required("Required"),
    country: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    addressLine1: Yup.string().required("Required"),

    arrivealDate: Yup.date().required("Required"),
    departureDate: Yup.date().required("Required"),

    message: Yup.string(),
    termsOfService: Yup.boolean()
      .oneOf([true], "The terms and conditions must be accepted.")
      .required("The terms and conditions must be accepted."),
  });
  const INITIALVALUES = {
    firstname: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    country: "",
    city: "",
    state: "",
    arrivealDate: "",
    departureDate: "",
    message: "",
    termsOfService: false,
  };

  // const CssTextField = styled(Textfield)({
  //   "& label.Mui-focused": {
  //     color: "green",
  //   },
  //   "& .MuiInput-underline:after": {
  //     borderBottomColor: "green",
  //   },
  //   "& .MuiOutlinedInput-root": {
  //     "& fieldset": {
  //       borderColor: "black",
  //     },
  //     "&:hover fieldset": {
  //       borderColor: "green",
  //     },
  //     "&.Mui-focused fieldset": {
  //       borderColor: "green",
  //     },
  //   },
  // });

  return (
    <Box>
      <Formik
        initialValues={{ ...INITIALVALUES }}
        validationSchema={VALIDATION}
        onSubmit={(values) => {
          alert("succes");
          console.log(values);
        }}
      >
        <Form>
          <Typography
            variant="h1"
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeigth: "900",
              borderBottom: "2px solid #8888",
              paddingBottom: "10px",
              marginBottom: "15px",
            }}
          >
            Registration Form
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography>Your details</Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Textfield name="firstname" label="First Name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Textfield name="lastName" label="Last Name" />
            </Grid>

            <Grid item xs={12}>
              <Textfield name="email" label="Email" />
            </Grid>
            <Grid item xs={12}>
              <Textfield name="phone" label="Phone" />
            </Grid>
            <Grid item xs={12}>
              <Typography>Address</Typography>
            </Grid>
            <Grid item xs={12}>
              <Textfield name="addressLine1" label="Address Line1" />
            </Grid>
            <Grid item xs={12}>
              <Textfield name="addressLine2" label="Address Line2" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Textfield name="city" label="City" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Textfield name="state" label="State" />
            </Grid>
            <Grid item xs={12}>
              <Select name="country" label="Country" options={countries} />
            </Grid>
            <Grid item xs={12}>
              <Typography>Booking Information</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <DateTimePicker name="arrivealDate" label="Arrival Date" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DateTimePicker name="departureDate" label="Departure Date" />
            </Grid>
            <Grid item xs={12}>
              <Textfield
                name="message"
                label="Message"
                multiline={true}
                minRows={4}
              />
            </Grid>
            {/* <Grid item xs={12}>
                        <Checkbox
                          //name="termsOfService"
                          //legend="Terms Of Service"
                          label="I agree"
                        />
                      </Grid> */}
            <Grid item xs={12}>
              <Checkbox
                name="termsOfService"
                legend="Terms Of Service"
                label="I agree"
              />
            </Grid>
            <Grid item xs={12}>
              <Button>Submit Form</Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Box>
  );
}

export default FormRegistration;
