import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="relative bg-[url(https://img.freepik.com/free-photo/happy-pregnant-woman-late-pregnancy-stage-sitting-grass-lawn_1163-1681.jpg?w=1380&t=st=1671188420~exp=1671189020~hmac=152f6e66aa0641fa2a9d71939f6e7bb4be4184f5233f9d612cf5aa4271656dd4)] bg-cover bg-right sm:bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/90 sm:to-white/15"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center  sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl font-heading">
              Helping couples in their
              <strong className="block font-extrabold text-brandPink">
                Journey towards Parenthood
              </strong>
            </h1>

            <h3 className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed font-content">
              Thousands of babies and millions of memories began with a visit to
              GarbhaGudi
            </h3>
            <h3 className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed font-content">
              Making families smile since 2011
            </h3>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full font-content rounded bg-brandPink px-12 py-3 text-sm font-bold text-white shadow hover:bg-brandPink2 focus:outline-none focus:ring active:bg-brandPink3 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block font-content w-full rounded bg-white px-12 py-3 text-sm font-bold text-brandPink shadow hover:text-brandPink2 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
