import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import Loading from "../Loading";
import Error from "../Error";

const ALL_JOBS_QUERY = gql`
  query jobs {
    jobs {
      id
      title
      slug
      company {
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
    }
  }
`;

const JobsList = () => {
  const { loading, error, data } = useQuery(ALL_JOBS_QUERY);

  if (error) return <Error />;
  if (loading) return <Loading />;

  const { jobs } = data;
  return (
    <div className='-my-8 divide-y-2 divide-gray-800'>
      {jobs.map((job) => (
        <div
          key={job.id}
          className='py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap'
        >
          <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
            <span className='font-semibold title-font text-white'>
              {job.company.name}
            </span>
            <span className='mt-1 text-gray-500 text-sm'>
              {job.cities.map((city) => (
                <div key={city.id}>{`${city.name}, ${city.country.name}`}</div>
              ))}
            </span>
          </div>
          <div className='md:flex-grow'>
            <h2 className='text-2xl font-medium text-white title-font mb-2'>
              {job.title}
            </h2>
            <p className='leading-relaxed'>
              {job.tags
                .map((tag) => tag.name)
                .reduce((a, b) => `${a ? `${a}, ` : ""} ${b}`, "")}
            </p>
            <Link
              href={`/${job.company.slug}/${job.slug}`}
              className='text-green-900 inline-flex items-center mt-4'
            >
              Learn More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default JobsList;
