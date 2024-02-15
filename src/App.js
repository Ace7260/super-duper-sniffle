import React, { useState } from "react";
import "./App.css";
import { Button, Grid, Stack, TextField } from "@mui/material";
import { Tableau } from "./components/Tables";
import { useFormik } from "formik";
import InputField from "./components/Textfield";
import * as yup from "yup";
import File from "./components/File";

const App = () => {
  const initialValue = {
    name: "",
    interest: "",
    age: "",
  };

  const [data, setData] = useState([]);
  const [yourState, setYourState] = useState(initialValue);
  const [search, setSearch] = useState("");

  const validationSchema = yup.object({
    name: yup.string().required("name is required"),
    interest: yup.string().required("interest is required"),
    age: yup.string().required("age is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: yourState,
    validationSchema,
    onSubmit: (values) => {
      if (data.indexOf(values) === -1) setData([...data, values]);
      else alert("This person is already in the table.");
      setYourState(initialValue);
      setYourState({ name: "", interest: "", age: "" });
      formik.resetForm();
    },
  });

  const handleDelete = (row) => {
    let newArr = data.filter((item) => item !== row);
    setData(newArr);
  };

  const handleEdit = (row) => {
    setYourState(row);
    handleDelete(row);
  };

  const reinitForm = () => {
    formik.resetForm();
    setYourState(yourState);
  };

  const handleSearch = (event) => {
    // console.log(term.target.value);
    const term = event?.target.value;
    setSearch(term);
    // data.includes(term);
    if (term) {
      const newRows = data.filter((row) => {
        let matches = true;

        const properties = ["name", "interest", "age"];
        let containsQuery = false;

        properties.forEach((property) => {
          if (
            row[property]
              ?.toString()
              .toLowerCase()
              .includes(search.toString().toLowerCase())
          ) {
            containsQuery = true;
          }
        });

        if (!containsQuery) {
          matches = false;
        }
        return matches;
      });
      setData({ rows: newRows });
    } else {
      setData(data);
    }
  };

  const handleSubmit = () => {
    console.log(data, "sending");
    // apiCallingHere
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignContent="center"
      padding={5}
      gap={5}
    >
      <File />
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} xs={12}>
          <Grid item xs={5}>
            <InputField
              size="small"
              fullWidth
              label="firstName"
              id="name"
              name="name"
              value={formik.values?.name || ""}
              handleChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={5}>
            <InputField
              size="small"
              fullWidth
              label="Interest"
              id="interest"
              name="interest"
              value={formik.values?.interest || ""}
              handleChange={formik.handleChange}
              error={formik.touched.interest && Boolean(formik.errors.interest)}
              helperText={formik.touched.interest && formik.errors.interest}
            />
          </Grid>
          <Grid item xs={5}>
            <InputField
              size="small"
              fullWidth
              label="Age"
              id="Age"
              name="age"
              value={formik.values?.age || ""}
              handleChange={formik.handleChange}
              error={formik.touched.age && Boolean(formik.errors.age)}
              helperText={formik.touched.age && formik.errors.age}
            />
          </Grid>
          <Grid item xs={5}>
            <InputField
              size="small"
              fullWidth
              label="Age"
              id="Age"
              name="age"
              value={formik.values?.age || ""}
              handleChange={formik.handleChange}
              error={formik.touched.age && Boolean(formik.errors.age)}
              helperText={formik.touched.age && formik.errors.age}
            />
          </Grid>

          <Grid item xs={12}>
            <Stack direction="row" justifyContent="center" gap={12}>
              <Button type="submit" variant="contained" color="primary">
                Add
              </Button>
              <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={() => reinitForm()}
              >
                reset
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>
      <TextField
        name="search"
        id="input"
        fullWidth
        variant="outlined"
        autoComplete="off"
        size="small"
        onChange={(e) => handleSearch(e)}
        value={search}
        style={{ minWidth: 50 }}
      />
      <Tableau
        data={data}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleSubmit={handleSubmit}
      />
    </Grid>
  );
};

export default App;
