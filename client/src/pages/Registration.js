import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

const Registration = () => {
    const initialValues = {
        username: "",
        password: "",
      };
    
      const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required(),
      });

      const onsubmit = (data) => {
        axios.post("http://localhost:3001/auth", data).then((response) => {
          console.log("IT WORKED ------------>", data);
        //   navigate("/")
        });
    }
  return (
  
   <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onsubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          
          <label> Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="(Ex. Doe123...)"
          />

            <label> Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autoComplete="off"
            type="password"
            id="inputCreatePost"
            name="password"
            placeholder="(password123)"
          />
          <button type="submit"> Sign up</button>
        </Form>
      </Formik>
  </div>
  );
};

export default Registration;
