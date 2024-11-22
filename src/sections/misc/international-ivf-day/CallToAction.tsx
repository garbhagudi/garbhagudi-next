import Link from 'next/link';

const CallToActionSection = () => {
  return (
    <div className='mt-8 text-center'>
      <Link href={'https://www.garbhagudi.com/ivf/yoga'}>
        <button className='rounded bg-gg-500 px-4 py-2 text-white'>Join Us</button>
      </Link>
    </div>
  );
};

export default CallToActionSection;
