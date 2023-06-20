import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function CreatePost() {

  let navigate = useNavigate()

  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });
  const onsubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      console.log("IT WORKED ------------>", data);
      navigate("/")
    });
  };
  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onsubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label> Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="title"
            placeholder="(Ex. title...)"
          />
          <label> Post: </label>
          <ErrorMessage name="postText" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="postText"
            placeholder="(Ex. post...)"
          />
          <label> Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="(Ex. Doe123...)"
          />
          <button type="submit"> Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
