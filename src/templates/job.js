import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

import { Formik, Field } from "formik";
import axios from "axios";

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Loader from "../components/loader"

import JobsImage from "../components/jobsImg";

const Job = ({ data, location }) => {
  // console.log(data, location);
  const job = data.contentfulJobs;

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isStudent, setIsStudent] = useState(true);

  // useEffect(() => {
  //   if (isStudent) {
  //     location.hash = "#student"
  //   } else {
  //     location.hash = "#flexi";
  //   }
  // }, [isStudent]);

  useEffect(() => {
    setIsStudent(location.hash !== "#flexi");
  }, [location]);

  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Verplicht';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Emailadres is niet correct';
    }

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
      <SEO title={job.title} />
      <section className="jumbotron jumbotron--banner overlay" id="student">
        <header className="jumbotron__header jumbotron__header--center">
          <h1 className="jumbotron__title">{ job.title }</h1>
        </header>
        <JobsImage />
      </section>

      <div className="job-btns__wrap">
        <button className={`btn-job student ${isStudent ? 'active' : ''}`} onClick={() => setIsStudent(true)}>STUDENT</button>
        <button className={`btn-job flex ${!isStudent ? 'active' : ''}`} onClick={() => setIsStudent(false)}>FLEXI</button>
      </div>

      <section className="jumbotron jumbotron--job">
        <div className="container">
          <div className="row">
            <div className="w-5">
              <div className="job--description description">
                { documentToReactComponents(isStudent ? job.studentDescription.json : job.flexDescription.json) }
              </div>
            </div>

            <div className="w-5">
              <div className="job--offer description">
                { documentToReactComponents(isStudent ? job.studentOffer.json : job.flexOffer.json) }
              </div>
              <div className="job--sold description">
                { documentToReactComponents(isStudent ? job.studentSold.json : job.flexSold.json) }
              </div>
            </div>
            
            <div className="w-10">
              <div className={`form-wrapper${hasSubmitted ? " submitted" : ""}`}>
                <Formik
                  initialValues={{ 
                    role: 'Student',
                    position: '',
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
                    formData.append("position", values.position);
                    formData.append("phone", values.phone);
                    formData.append("email", values.email);
                    formData.append("msg", values.msg);
                    formData.append("firstname", values.firstname);
                    formData.append("lastname", values.lastname);
                    formData.append("file", values.file);
                    
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
                          <input type="hidden" name="role" id="role" value={isStudent ? "Student" : "Flexi"} />
                          <input type="hidden" name="position" id="position" value={job.title} />
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

                          <div className="form-field">
                            <label htmlFor="file">CV</label>
                            <input name="file" id="file" type="file" onChange={ e => setFieldValue("file", e.target.files[0]) } />
                            <span className="form-field__error">{errors.file && touched.file && errors.file}</span>
                          </div>
                          
                          <button className={`btn btn--submit${isSubmitting ? " disabled" : ""}`} type="submit" disabled={isSubmitting}>
                            Verzenden
                          </button>
                        </form>
                      ) }
                    </>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    contentfulJobs(id: {eq: $id}) {
      slogan
      title
      id
      flexDescription {
        json
      }
      flexOffer {
        json
      }
      flexSold {
        json
      }
      studentSold {
        json
      }
      studentOffer {
        json
      }
      studentDescription {
        json
      }
    }
  }
`;

export default Job;