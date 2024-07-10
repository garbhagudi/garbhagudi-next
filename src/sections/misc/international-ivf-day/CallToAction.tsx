import Link from 'next/link';

const CallToActionSection = () => {
    return (
      <div className='text-center mt-8'>
        <Link href={"https://www.garbhagudi.com/ivf/yoga"}>
          <button className='bg-gg-500 text-white px-4 py-2 rounded'>
            Join Us
          </button>
        </Link>
      </div>
    );
  };
  
  export default CallToActionSection;
  