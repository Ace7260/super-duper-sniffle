import "./App.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";
// import RegistrationForm from "./RegistrationForm";
import Textfield from "./components/Textfield";
import Select from "./components/Select";
import countries from "./data/countries.json";
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));
function App() {
  const VALIDATION = Yup.object().shape({
    firstname: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("Email Invalid"),
    phone: Yup.number()
      .integer()
      .typeError("Please enter Valid phone number")
      .required("Required"),
    country: Yup.string().required("Required"),
    addressLine1: Yup.string().required("Required"),
  });
  const INITIALVALUES = {
    firstname: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    country: "",
  };
  const classes = useStyles();

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
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap="10"
    >
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Box className={classes.formWrapper}>
            <Formik
              initialValues={INITIALVALUES}
              validationSchema={VALIDATION}
              onSubmit={(values) => {
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
                    <Select
                      name="country"
                      label="Country"
                      options={countries}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Booking Information</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Textfield name="arrivalDate" label="Arrival Date" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Textfield name="dep_date" label="Departure Date" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="message" label="Message" />
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
