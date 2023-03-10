import React from "react";

const About = () => {
  return (
    <div className="">
      <div className="max-w-5xl mx-auto pb-16">
        <h3 className="text-3xl lg:text-4xl font-heading font-bold text-center lg:pb-10 text-gray-700">
          About Us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          <div className="hidden col-span-2 md:flex items-center justify-center rounded-lg mx-auto ">
            <img
              src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1659164257/logos/GG_Vertical_Logo_nrcl5h.svg"
              alt="logo"
              className="w-56 h-56 p-3 bg-gradient-to-br from-brandPurple via-white to-brandPink4 rounded-xl shadow-2xl drop-shadow-2xl animate-shine bg-[length:400%]"
            />
          </div>
          <div className="col-span-3 flex mt-6 md:mt-0 font-content items-center justify-center flex-col px-3">
            <div>
              Spanning over a decade, GarbhaGudi has served as a beacon of hope
              to thousands of infertile couples. Our experienced and dedicated
              specialists, nurses, and embryologists work to cater for your
              needs and respond to them quickly, professionally and warmly.
            </div>
            <div className="pt-3">
              GarbhaGudi IVF Hospital in Bangalore was founded in 2011, our
              pioneering work has led to the progression and implementation of
              the latest medical technologies and methods to overcome female and
              male infertility. Our centre has been helping couples from every
              corner of the world, to fulfil their ardent desire to have a baby.
              It is our sincere wish that you will be our next success story.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
