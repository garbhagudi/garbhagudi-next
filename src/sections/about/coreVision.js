const CoreVision = () => {
  return (
    <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-max lg:max-w-7xl mx-auto">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="text-base max-w-prose lg:max-w-none"></div>
        </div>
        <div className="relative">
          <svg
            className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="95e8f2de-6d30-4b7e-8159-f791729db21b"
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
              height={384}
              fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
            />
          </svg>
          <svg
            className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
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
              height={384}
              fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
            />
          </svg>
          <div className="relative md:bg-white md:p-6">
            <p className="mt-2 text-4xl leading-8 font-bold tracking-tight text-brandliteGray sm:text-5xl my-4 font-content">
              Core Values
            </p>
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="prose prose-indigo prose-lg text-brandDark lg:max-w-none">
                <ul className="list-disc space-y-2 font-content">
                  <li>
                    Service loyalty to the patients and financial loyalty to the
                    organization.
                  </li>
                  <li>
                    Complete adherence to ethical practices, at all times, in
                    all situations.
                  </li>
                  <li>
                    Adhere to Government rules, Medical Council rules &
                    guidelines and importantly to the rules of mother Nature.
                  </li>
                  <li>Priority to patients, people and partners</li>
                  <li>Hire the best people, train them and retain them</li>
                  <li>
                    Commitment to social responsibility in terms of treatments
                    and costs to those who cannot afford treatments.
                  </li>
                </ul>
              </div>

              <div className="mt-6 text-gray-500 lg:mt-0">
                <p className="text-4xl leading-8 font-bold tracking-tight text-brandliteGray sm:text-5xl my-4 font-content lg:-mt-[72px]">
                  Vision
                </p>
                <p className="italic font-content text-brandDark">
                  &quot;My GarbhaGudi shall be a globally renowned reproductive
                  health university, having superlative success rates, due to
                  strong scientific approach, ethical values and humane
                  touch&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreVision;
