import React, { useRef, useEffect, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Formik, Field } from "formik";

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactImg from "../components/contactImg";

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className="jumbotron jumbotron--banner overlay">
        <header className="jumbotron__header jumbotron__header--center">
          <h1 className="jumbotron__title">Get in touch</h1>
        </header>
        <ContactImg />
      </section>
      
      <section className="jumbotron jumbotron--contact">
        <header>
          <h2>Meet the tribe</h2>
        </header>

        <p className="description">
          Nieuwsgierig? Leer ons geweldige team kennen! Jong, energiek en klaar om jouw project met veel enthousiasme aan te pakken!
        </p>

        <div className="form-wrapper">
          <Formik
            initialValues={{ 
              role: 'client',
              firstname: '', 
              lastname: '', 
              phone: '',  
              email: '', 
              msg: '',
            }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Verplicht';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Emailadres is niet correct';
              }
              if (!values.firstname) {
                errors.firstname = 'Verplicht';
              }
              if (!values.lastname) {
                errors.lastname = 'Verplicht';
              }
              if (!values.phone) {
                errors.phone = 'Verplicht';
              }
              if (!values.msg) {
                errors.msg = 'Verplicht';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>

                <div className="form-field">
                  <label htmlFor="role">Je bent een</label>
                  <Field as="select" name="role" id="role">
                    <option value="client">Klant</option>
                    <option value="student">Student</option>
                  </Field>
                  <span className="form-field__error">{errors.role && touched.role && errors.role}</span>
                </div>

                <div className="form-field">
                  <label htmlFor="firstname">Voornaam *</label>
                  <Field name="firstname" id="firstname" type="input" />
                  <span className="form-field__error">{errors.firstname && touched.firstname && errors.firstname}</span>
                </div>
    
                <div className="form-field">
                  <label htmlFor="lastname">Achternaam *</label>
                  <Field name="lastname" id="lastname" type="input" />
                  <span className="form-field__error">{errors.lastname && touched.lastname && errors.lastname}</span>
                </div>
    
                <div className="form-field">
                  <label htmlFor="phone">Telefoon *</label>
                  <Field name="phone" id="phone" type="input" />
                  <span className="form-field__error">{errors.phone && touched.phone && errors.phone}</span>
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email *</label>
                  <Field name="email" id="email" type="input" />
                  <span className="form-field__error">{errors.email && touched.email && errors.email}</span>
                </div>

                <div className="form-field">
                  <label htmlFor="msg">Bericht *</label>
                  <Field name="msg" id="msg" type="input" as="textarea" rows="5" />
                  <span className="form-field__error">{errors.msg && touched.msg && errors.msg}</span>
                </div>

                <button className="btn btn--submit" type="submit" disabled={isSubmitting}>
                  Verzenden
                </button>
              </form>
            )}
          </Formik>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
