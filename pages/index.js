import Head from "next/head";
import JobsList from "../components/Job/JobsList";

const Home = () => {
  return (
    <section className='text-gray-400 bg-gray-900 body-font overflow-hidden'>
      <Head>
        <title>Job Board</title>
        <meta name='description' content='Job offers' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container px-5 py-24 mx-auto'>
        <JobsList />
      </div>
    </section>
  );
};

export default Home;
