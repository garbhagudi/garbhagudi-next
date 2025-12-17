const Banner = () => {
  return (
    <div className='bg-[url(https://res.cloudinary.com/garbhagudiivf/image/upload/v1691229236/Misc/pregnant-woman-min_wvchfc.webp)] bg-cover bg-right bg-no-repeat shadow-2xl sm:bg-center'>
      <div className='h-full w-full bg-black bg-opacity-70 py-6'>
        <div className='mx-auto flex h-[50vh] max-w-5xl items-center'>
          <div className='absolute z-10'>
            <div className='mx-auto w-full px-3 text-center text-base md:max-w-2xl md:text-left'>
              <h1 className='font-heading text-3xl font-bold leading-tight text-brandPink lg:text-4xl'>
                Infertility Treatment in Bangalore
              </h1>
            </div>
            <p className='mt-4 px-3 text-center font-content text-base font-medium text-gray-200 md:max-w-xl md:text-left'>
              "GarbhaGudi IVF Centre offers cutting-edge infertility treatment in Bangalore,
              providing personalized solutions to enhance your chances of parenthood. Our renowned
              team of fertility experts and state-of-the-art facilities make us a leading choice for
              comprehensive and effective fertility care in Bangalore."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
