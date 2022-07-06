import React, { Component } from "react";
import { useEffect } from "react";
import { ReactDOM } from "react-dom";
import { useState } from "react";
import postApi from '../../baseurl'
// import { BLOGURL, LOGINURL } from "../api/allurl";
import { BLOGURL, LOGINURL } from "../../api/allurl";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { Formik } from "formik";
import * as Yup from "yup";
import "./login.css";
import {Container, Row, Col} from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Form Validations End+

export default function Login() {
  
  // const [data, setData] = useState();
  // useState(() => {
  //   axios.get(BLOGURL).then((res) => {
  //     setData(res.data);
  //   }, []);
  // });

  // form input value sethare

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Password in Required"),
    }),

    onSubmit: (values) => {
      // console.log(values);
      postApi(LOGINURL, values)
    },
  });

  return (
    <Container>

      <ToastContainer />
      
        <Row>
        <Col xs={6} md={3}>
        
        </Col>
        <Col xs={6} md={6}>
        <form onSubmit={formik.handleSubmit} className="loginformcss">
      <h3 className="text-center">Sign In</h3>

      <div className="mb-3 formcss">
        <label htmlFor="">Email<sup>*</sup></label>
        <input 
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>

      <div className="mb-3">
      <label htmlFor="">Password<sup>*</sup></label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      </div>

      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>

      <p className="forgot-password text-center">
          Already registered <NavLink to="/sign-up">sign up?</NavLink>
        </p>

      <p className="forgot-password text-center">
        Forgot <a href="#">password?</a>
      </p>
      
    </form>
        </Col>
        <Col xs={6} md={3}>
         
        </Col>
      </Row>
    </Container>
    
  );
}
