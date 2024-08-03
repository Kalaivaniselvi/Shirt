import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import SidePopup from "../../../components/model-pop/side-popup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../../components/button/button";

const Login = () => {
  const [show, setShow] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className="cursor-pointer"
        style={{ cursor: "pointer" }}
      >
        <BsPerson size={20}/>
      </div>
      {show && (
        <SidePopup
          showModal={show}
          handleClose={() => setShow(false)}
          title="LOGIN"
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="pt-4 px-4">
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email*"               
                    style={{ width: '-webkit-fill-available' }}                       
                  />
                  <ErrorMessage name="email" component="div" />
                </div>

                <div className="mt-4">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password*"
                    style={{ width: '-webkit-fill-available' }}
                  />
                  <ErrorMessage name="password" component="div" />
                </div>

                <div>
                  <a href="">Forgot your password?</a>
                </div>

                <div className="mt-2">
                  <Button title={"Sign In"} />
                </div>

                <div>
                  <a href="">New customer? Create your account</a>
                </div>
              </Form>
            )}
          </Formik>
        </SidePopup>
      )}
    </>
  );
};

export default Login;
