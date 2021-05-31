const JobDetails = ({ job }) => (
  <div className='lg:w-4/6 mx-auto'>
    <div className='flex flex-col sm:flex-row mt-10'>
      <div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
        <div className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600'>
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-10 h-10'
            viewBox='0 0 24 24'
          >
            <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
            <circle cx='12' cy='7' r='4'></circle>
          </svg>
        </div>
        <div className='flex flex-col items-center text-center justify-center'>
          <span className='font-medium mt-4 text-white text-mg'>
            {job.company.name}
          </span>
          is recruiting a
          <h2 className='font-medium title-font mt-4 text-white text-lg'>
            {job.title}
          </h2>
          <div className='w-12 h-1 bg-green-500 rounded mt-2 mb-4' />
          <p className='text-base text-gray-400'>
            {job.postedAt.substr(0, 10)}
          </p>
          <div className='w-12 h-1 bg-green-500 rounded mt-2 mb-4' />
          <p className='text-base text-gray-400'>{job.commitment.title}</p>
          <div className='w-12 h-1 bg-green-500 rounded mt-2 mb-4' />
          <p className='text-base text-gray-400'>
            {job.tags
              .map((tag) => tag.name)
              .reduce((a, b) => `${a ? `${a}, ` : ""} ${b}`, "")}
          </p>
        </div>
      </div>
      <div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
        <div dangerouslySetInnerHTML={{ __html: job.description }} />
        <div>
          <a className='text-green-400 inline-flex items-center'>
            Apply
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-4 h-4 ml-2'
              viewBox='0 0 24 24'
            >
              <path d='M5 12h14M12 5l7 7-7 7' />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
);
export default JobDetails;
