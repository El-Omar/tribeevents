import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import JobsImg from "../components/jobsImg";

const Jobs = () => {

  const data = useStaticQuery(graphql`
    {
      allContentfulJobs {
        nodes {
          slogan
          title
          id
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Jobs" />
      <section className="jumbotron jumbotron--banner overlay" id="student">
        <header className="jumbotron__header jumbotron__header--center">
          <h1 className="jumbotron__title">Jobs</h1>
        </header>
        <JobsImg />
      </section>

      <section className="jumbotron jumbotron--job">
        <div className="container">
          <div className="row">
            { data.allContentfulJobs.nodes.map(job => (
              <div className="w-5 job__wrapper" key={job.id}>
                <Link to={`/jobs/${job.id}/`} className="job" key={job.id}>
                  <strong className="slogan">{ job.slogan }</strong>
                  <h2>{ job.title }</h2>
                </Link>
              </div>
            )) }
          </div>
        </div>
      </section>
    </Layout>
      
  )

};

export default Jobs;