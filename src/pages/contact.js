import React, { useEffect, useState } from "react"
import { Formik, Field } from "formik";
import axios from "axios";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Loader from "../components/loader"

import ContactImg from "../components/contactImg";

const Contact = (props) => {
  const [isClient, setIsClient] = useState(true);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    if (props.location.hash === "#student") {
      setIsClient(false);
    }
  }, [props]);

  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Verplicht';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Emailadres is niet correct';
    }

    if (isClient) {
      if (!values.companyname) {
        errors.companyname = 'Verplicht';
      }
    } else {
      //Name validation
      if (!values.firstname) {
        errors.firstname = 'Verplicht';
      }
      if (!values.lastname) {
        errors.lastname = 'Verplicht';
      }
      //CV Validation
      if (!values.file) {
        errors.file = 'Verplicht';
      } else if (values.file.type.toLowerCase() !== "application/pdf") {
        errors.file = 'Enkel bestanden met het type PDF zijn toegestaan';
      } else if (values.file.size > 25000000) {
        errors.file = 'Maximum toegelaten grootte is 25 MB';
      }
    }

    if (!values.phone) {
      errors.phone = 'Verplicht';
    }
    if (!values.msg) {
      errors.msg = 'Verplicht';
    }
    return errors;
  };

  return (
    <Layout>
      <SEO title="Contact" />
      <section className="jumbotron jumbotron--banner overlay" id="student">
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
          { isClient ? 
          `Nieuwsgierig? Leer ons geweldige team kennen! Jong, energiek en klaar om jouw project met veel enthousiasme aan te pakken!` 
          : 
          `Gemotiveerd en ervaren? Kom en vervolledig ons team!` 
          }
        </p>

        <div className={`form-wrapper${hasSubmitted ? " submitted" : ""}`}>
          <Formik
            initialValues={{ 
              role: 'client',
              companyname: '',
              firstname: '', 
              lastname: '', 
              phone: '',  
              email: '', 
              msg: '',
              file: '',
            }}
            validate={validate}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);

              const formData = new FormData();
              formData.append("role", values.role);
              formData.append("phone", values.phone);
              formData.append("email", values.email);
              formData.append("msg", values.msg);

              if (isClient) {
                formData.append("companyname", values.companyname);
              } else {
                formData.append("firstname", values.firstname);
                formData.append("lastname", values.lastname);
                formData.append("file", values.file);
              }
              
              axios
                .post(
                  "https://getform.io/f/24aa63e3-9585-4bf7-b385-500771021541",
                  formData,
                  { headers: { Accept: "application/json" } }
                )
                .then(function(response) {
                  console.log("success? ", response);
                  setHasSubmitted(true);
                  setSubmitting(false);
                })
                .catch(function(error) {
                  console.log("errors: ", error);
                });
            }}
          >
            {({
              errors,
              touched,
              handleSubmit,
              isSubmitting,
              setFieldValue,
              validateForm
            }) => (
              <>
                { isSubmitting && <Loader /> }
                { hasSubmitted && (
                  <div className="sent">
                    <h3>Uw bericht werd verzonden!</h3>
                    <p className="description">
                     We nemen zo spoedig mogelijk contact met u op.
                    </p>
                  </div>
                ) }
                { !hasSubmitted && (
                  <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
                    <div className="form-field">
                      <label htmlFor="role">Je bent een</label>
                      <Field as="select" name="role" id="role" value={isClient ? 'client' : 'student'} onChange={e => {
                        setIsClient(e.target.value === "client");
                        setFieldValue("role", e.target.value);
                        validateForm();
                      }}>
                        <option value="client">Klant</option>
                        <option value="student">Student</option>
                      </Field>
                      <span className="form-field__error">{errors.role && touched.role && errors.role}</span>
                    </div>

                    {
                      isClient && (
                        <div className="form-field">
                          <label htmlFor="companyname">Bedrijfsnaam *</label>
                          <Field name="companyname" id="companyname" type="input" />
                          <span className="form-field__error">{errors.companyname && touched.companyname && errors.companyname}</span>
                        </div>
                      )
                    }

                    {
                      !isClient && (
                        <>
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
                        </>
                      )
                    }
        
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

                    {
                      !isClient && (
                        <div className="form-field">
                          <label htmlFor="file">CV</label>
                          <input name="file" id="file" type="file" onChange={ e => setFieldValue("file", e.target.files[0]) } />
                          <span className="form-field__error">{errors.file && touched.file && errors.file}</span>
                        </div>
                      )
                    }

                    <button className={`btn btn--submit${isSubmitting ? " disabled" : ""}`} type="submit" disabled={isSubmitting}>
                      Verzenden
                    </button>
                  </form>
                ) }
              </>
            )}
          </Formik>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
