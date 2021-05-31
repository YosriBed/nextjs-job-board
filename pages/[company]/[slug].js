import Head from "next/head";
import JobDetails from "../../components/Job/JobDetails";
import { getAll, getByCompanyAndSlug } from "../../lib/job";

export const getStaticPaths = async () => {
  const jobs = await getAll();
  const paths = jobs.map((job) => ({
    params: { company: job.company.slug, slug: job.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const job = await getByCompanyAndSlug(params.company, params.slug);
  return {
    props: { job: job || null },
    revalidate: 60,
  };
};
const Job = ({ job }) => {
  return (
    <section className='text-gray-400 bg-gray-900 body-font'>
      <div className='container px-5 py-24 mx-auto flex flex-col'>
        <Head>
          <title>{job && job.title}</title>
          <meta name='description' content='Job offers' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <JobDetails job={job} />
      </div>
    </section>
  );
};

export default Job;
