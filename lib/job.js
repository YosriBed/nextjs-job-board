import { initializeApollo } from "../apolloClient";
import { gql } from "@apollo/client";

export const getAll = async () =>
  initializeApollo()
    .query({
      query: gql`
        query jobs {
          jobs {
            id
            slug
            company {
              id
              slug
            }
          }
        }
      `,
    })
    .then((result) => result.data.jobs)
    .catch((err) => console.log(err));

export const getByCompanyAndSlug = async (companySlug, jobSlug) =>
  initializeApollo()
    .query({
      query: gql`
        query job($jobSlug: String!, $companySlug: String!) {
          job(input: { jobSlug: $jobSlug, companySlug: $companySlug }) {
            id
            title
            slug
            company {
              id
              slug
              name
            }
            cities {
              id
              name
              country {
                name
              }
            }
            tags {
              id
              name
            }
            postedAt
            commitment {
              id
              title
            }
            description
          }
        }
      `,
      variables: {
        jobSlug,
        companySlug,
      },
    })
    .then((result) => result.data.job)
    .catch((err) => console.log(err));
