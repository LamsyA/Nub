import React from "react";
import {Formik, Form, Field} from 'formik'

function CreatePost() {
  return( 
     <div className="createPostPage">
      <Formik>
        <Form className="formContainer">
          <label> Title: </label>
          <Field
          autoComplete="off"
          id= "inputCreatePost"
          name="title"
          placeholder="(Ex. title...)"
          />
           <label> Post: </label>
          <Field
          autoComplete="off"
          id= "inputCreatePost"
          name="postText"
          placeholder="(Ex. post...)"
          />
           <label> Username: </label>
          <Field
          autoComplete="off"
          id= "inputCreatePost"
          name="username"
          placeholder="(Ex. Doe123...)"
          />
        </Form>
      </Formik>
    </div>)
}

export default CreatePost;
