import React from "react";

const Video = () => {
  return (
    <div>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 mb-16 ">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl font-heading">
                <span className="block text-gray-900">Data to enrich your</span>
                <span className="block text-brandPink3">online business</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-content">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua ad ad non deserunt sunt.
            </p>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <svg
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
              width={640}
              height={784}
              fill="none"
              viewBox="0 0 640 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                  x={118}
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
                y={72}
                width={640}
                height={640}
                className="text-gray-50"
                fill="currentColor"
              />
              <rect
                x={118}
                width={404}
                height={784}
                fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
              />
            </svg>
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <button
                type="button"
                className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandPink3"
              >
                <span className="sr-only">Watch our video to learn more</span>
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt=""
                />
                <div
                  className="absolute inset-0 w-full h-full flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    className="h-20 w-20 text-brandPink3"
                    fill="currentColor"
                    viewBox="0 0 84 84"
                  >
                    <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
                    <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Video;
