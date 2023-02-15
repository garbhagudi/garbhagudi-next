import { HiStar } from "react-icons/hi";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-white pb-8 sm:pb-12 lg:pb-12">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-36 font-content">
        <div className="mx-auto max-w-md px-3 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mt-14">
              <div>
                <div className="inline-flex space-x-4">
                  <span className="text-center sm:text-left rounded bg-brandPink5 px-2 py-1 text-xs font-bold text-brandPink  uppercase">
                    What's new
                  </span>
                  <div className="inline-flex items-center text-sm font-normal text-brandPink">
                    <div>
                      Get Free Fertility Screenig with Valentine's Day Offer
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-4xl font-extrabold sm:text-5xl font-heading text-gray-700">
                  Welcome to the Best IVF Centre In Bangalore
                </h1>
                <p className="mt-6 text-xl text-gray-500">
                  Affordable IVF Treatment Options Starting from ₹90,000/-*
                </p>
                <p className="mt-2 text-xl text-gray-500">
                  EMI Facility Available at 0% Interest.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="mb-6 text-2xl font-heading font-bold text-gray-700">
                  Why choose GarbhaGudi?
                </h3>
                <div className="grid grid-cols-2 text-gray-600 font-semibold gap-3 text-sm md:text-base">
                  <div className="bg-gray-200 hover:bg-gray-300 pl-3 py-1 rounded-md">
                    <span className="font-bold text-brandPink">8500+</span>{" "}
                    Happy Families
                  </div>
                  <div className="bg-gray-200 hover:bg-gray-300 pl-3 py-1 rounded-md">
                    <span className="font-bold text-brandPink">12+</span> Years
                    of Experience
                  </div>
                  <div className="bg-gray-200 hover:bg-gray-300 pl-3 py-1 rounded-md">
                    <span className="font-bold text-brandPink">65-73%</span> IVF
                    Success Rate
                  </div>
                  <div className="bg-gray-200 hover:bg-gray-300 pl-3 py-1 rounded-md">
                    <span className="font-bold text-brandPink">5</span> Centres
                    Across Bangalore
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="inline-flex items-center divide-x divide-gray-300">
                  <div className="flex-shrink-0 flex pr-5">
                    <HiStar
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                    <HiStar
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                    <HiStar
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                    <HiStar
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                    <HiStar
                      className="h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                    <span className="font-medium text-gray-900">
                      Rated 4.8 stars
                    </span>{" "}
                    on{" "}
                    <span className="font-medium text-brandPink">
                      Google Reviews
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href={"tel:+919108910832"}
                    className="text-base px-4 py-2 bg-brandPink text-white font-semibold rounded-lg hover:bg-brandPink3"
                  >
                    Book a free consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
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
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
            <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
              <img
                className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1676448333/Misc/Landing/Neutral/happy-family-with-their-first-child-min_fgylvk.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
