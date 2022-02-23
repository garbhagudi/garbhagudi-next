import React from "react";

const BlogFooter = () => {
  return (
    <div className="relative py-16 bg-transparent">
      <div
        className="hidden absolute top-0 inset-x-0 h-1/2 lg:block"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto bg-transparent lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
            <div
              className="absolute inset-x-0 h-1/2  lg:hidden"
              aria-hidden="true"
            />
            <div className="max-w-md mx-auto px-8 sm:max-w-max lg:max-w-none lg:p-0 hidden lg:block">
              <div className="max-h-96">
                <img
                  className="object-cover object-center rounded-3xl shadow-2xl max-h-96 w-96"
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643701776/About/garbhagudi-ivf-center-bangalore-5f3b94a8e4de6_kk97e4.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="relative bg-brandPurpleDark lg:col-start-3 lg:row-start-1 lg:col-span-10 rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
            <div
              className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
              aria-hidden="true"
            >
              <svg
                className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
                      className="text-gray-700"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
              <svg
                className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
                      className="text-gray-50"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
            </div>
            <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
              <h2
                className="text-3xl font-extrabold text-gray-100 font-heading"
                id="join-heading"
              >
                About Us
              </h2>
              <p className="text-lg text-gray-100 font-qs">
                GarbhaGudi is a chain of New-Generation Infertility Treatment
                Hospitals equipped with state-of- art-infrastructure &amp;
                cutting-edge IVF Technology to address infertility issues &amp;
                their emotional &amp; mental effects on couples. We have a team
                of qualified &amp; experienced doctors; their in-depth knowledge
                &amp; expertise leaves no stone unturned to solve all your
                infertility issues. The Supportive &amp; caring staff is always
                by your side to motivate &amp; guide you throughout the journey.
                GarbhaGudi IVF, the best fertility treatment hospital in
                Bangalore, provides emotional support to couples facing
                infertility issues and sexual problems
              </p>
              <a
                className="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-brandDark hover:bg-brandDark hover:text-gray-100 sm:inline-block sm:w-auto"
                href="https://salesiq.zoho.com/signaturesupport.ls?widgetcode=93210c756ea31b2224df734860e5d813b081008ce54deb21426241464ccb8de2e6558490d76d66086d0b48b1ed4abff0"
                target={"_blank"}
                rel="noreferrer"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFooter;
