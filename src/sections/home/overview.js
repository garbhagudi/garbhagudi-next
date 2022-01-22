import React from "react";

const Overview = () => {
  return (
    <div className="relative bg-white">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start mt-10 md:mt-0">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1642787929971-9a1fc0e58eaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
              <div className="absolute inset-0 bg-gray-200 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-brandPink via-gray-400 mix-blend-multiply" />
              <div className="relative px-8">
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-brandPink"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative text-sm font-qs font-semibold">
                      GarbhaGudi is a world-class organization built on a solid
                      set of value systems, efficient processes, visionary
                      leaders and technological forays. Most importantly, with a
                      fantastic team of doctors, embryologists and staff. <br />
                      <br /> The centre has been instrumental in creating happy
                      endings in more than 7000 + couples’ lives by ensuring
                      they have their biological child. With our strong team of
                      experts and cutting-edge medical technologies, GarbhaGudi
                      has achieved high success rates in the field of
                      infertility. We remain dedicated to our vision and leave
                      no stone unturned to ensure that the couple can take home
                      a healthy baby and enjoy parenthood
                    </p>
                  </div>

                  <footer className="mt-4">
                    <p className="text-base font-semibold text-purple-300 font-qs">
                      Dr Asha S Vjay, Medical Director at GarbhaGudi
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl font-heading lg:mt-10">
              Why GarbhaGudi?
            </h2>
            <div className="mt-3 text-brandDark sm:mt-5 sm:text-xl lg:text-lg xl:text-base text-base font-content">
              <p className="text-md lg:text-xl">
                Spanning over a decade, GarbhaGudi has served as a beacon of
                hope to thousands of infertile couples. Our experienced and
                dedicated specialists, nurses, and embryologists work to cater
                for your needs and respond to them quickly, professionally and
                warmly. With the unparalleled treatments offered by skilled and
                renowned infertility specialists since 2011, our pioneering work
                has led to the progression and implementation of the latest
                medical technologies and methods to overcome female and male
                infertility. GarbhaGudi IVF is the place where couples come if
                treatment at all other centres fails. So, there are umpteen
                cases where couples have conceived at GarbhaGudi when they have
                been told that there is no hope, and our centre has been helping
                couples from every corner of the world fulfil their ardent
                desire to have a baby.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
