import React, { Component } from "react";
import { useState } from "react";
import axios from "../../baseurl";
import { BLOGURL, SIGNUP_URL } from "../../api/allurl";
import { useFormik } from "formik";
import { Formik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// Form Validations End+

export default function Signup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Password in Required"),
    }),

    onSubmit: (values) => {
      axios.post(SIGNUP_URL, values).then((res) => {
        console.log(res);
      });
    },
  });

  return (
    <Container>
      <Row>
        <Col xs={6} md={3}></Col>
        <Col xs={6} md={6}>
          <form onSubmit={formik.handleSubmit} className="loginformcss">
            <h3 className="text-center">Sign Up</h3>
            <div className="mb-3">
              <label htmlFor="">
                Name<sup>*</sup>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="mb-3">
              <label htmlFor="">
                Email<sup>*</sup>
              </label>
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
              <label htmlFor="">
                Password<sup>*</sup>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
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
              Already registered <NavLink to="/sign-in">sign in? </NavLink>
            </p>

            <p className="forgot-password text-center">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </Col>
        <Col xs={6} md={3}></Col>
      </Row>
    </Container>
  );
}
