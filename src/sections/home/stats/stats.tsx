import React, { useState } from "react";

type Props = {};

const StatsPC = (props: Props) => {
  const [tooltipStatus, setTooltipStatus] = useState(0);
  return (
    <div className="hidden lg:block">
      <p className="font-heading text-center text-4xl py-10 bg-brandPink5 font-bold">
        This is why you can trust GarbhaGudi
      </p>
      <div className="max-w-lg md:max-w-4xl mx-auto align-middle mt-4">
        <div className="text-center ">
          <div className="grid grid-cols-4 grid-rows-4 font-content ">
            <div>
              <div
                className="h-[130px] w-[130px] flex flex-col items-center justify-center rounded-full mx-auto my-4 -mt-2 -mr-4"
                onMouseEnter={() => setTooltipStatus(1)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <img
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1660830364/Icons/Why%20GarbhaGudi/11-Years_bvg1gg.png"
                  alt="11+ years"
                  className="hover:scale-115 transition-all duration-500"
                />

                {tooltipStatus == 1 && (
                  <div className="absolute mt-44 text-sm">
                    Extensive Exprerience
                  </div>
                )}
              </div>
            </div>

            <div className="row-span-3 col-span-2 flex items-center justify-center rounded-full">
              <div className="absolute w-[700px] h-[700px] rounded-full bg-transparent border border-brandPink4 -z-30"></div>
              <div className="absolute w-[450px] h-[450px] rounded-full bg-transparent border-2 border-dashed border-brandPink4 animate-spinSlow -z-20"></div>
              <div className="flex items-center justify-center rounded-full ring-brandPink4 h-96 w-96 shadow-2xl border-4">
                <img
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1659164257/logos/GG_Vertical_Logo_nrcl5h.svg"
                  alt=""
                  className="h-64 w-64"
                />
              </div>
            </div>
            <div>
              <div
                className="h-[130px] w-[130px] flex items-center justify-center rounded-full mx-auto my-4 -mt-2 -ml-4"
                onMouseEnter={() => setTooltipStatus(2)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <img
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1660830350/Icons/Why%20GarbhaGudi/Holistic-Approach_timeda.png"
                  alt=""
                  className="hover:scale-115 transition-all duration-500"
                />
                {tooltipStatus == 2 && (
                  <div className="absolute text-sm mt-44">
                    Holistic Approach
                  </div>
                )}
              </div>
            </div>
            <div>
              <div
                className="h-[130px] w-[130px] flex items-center justify-center rounded-full mx-auto my-4 mr-14"
                onMouseEnter={() => setTooltipStatus(3)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <img
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1660830350/Icons/Why%20GarbhaGudi/Humane-Touch_qvniyh.png"
                  alt=""
                  className="hover:scale-115 transition-all duration-500"
                />
                {tooltipStatus == 3 && (
                  <div className="absolute text-sm mt-44">Humane Touch</div>
                )}
              </div>
            </div>
            <div>
              <div
                className="h-[130px] w-[130px] flex items-center justify-center rounded-full mx-auto my-4 ml-14"
                onMouseEnter={() => setTooltipStatus(4)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <img
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1660830505/Icons/Why%20GarbhaGudi/Successful-Pregnancy_1_xw1hbe.png"
                  alt=""
                  className="hover:scale-115 transition-all duration-500"
                />
                {tooltipStatus == 4 && (
                  <div className="absolute text-sm mt-44">
                    Successful Pregnancies
                  </div>
                )}
              </div>
            </div>
            <div>
              <div
                className="h-[130px] w-[130px] flex items-center justify-center rounded-full mx-auto my-4 mt-10 mr-0"
                onMouseEnter={() => setTooltipStatus(5)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <img
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1660830350/Icons/Why%20GarbhaGudi/Reknowed-Doctor_x52vlx.png"
                  alt=""
                  className="hover:scale-115 transition-all duration-500"
                />
                {tooltipStatus == 5 && (
                  <div className="absolute mt-44 text-sm">
                    Renowned Specialists
                  </div>
                )}
              </div>
            </div>
            <div>
              <div
                className="h-[130px] w-[130px] flex items-center justify-center rounded-full mx-auto ml-0 mt-10 my-4"
                onMouseEnter={() => setTooltipStatus(6)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <img
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1660830350/Icons/Why%20GarbhaGudi/Trasparent-Billing_rbt5lj.png"
                  alt=""
                  className="hover:scale-115 transition-all duration-500"
                />
                {tooltipStatus == 6 && (
                  <div className="absolute text-sm mt-44">
                    Transparent Pricing
                  </div>
                )}
              </div>
            </div>
            <div className="w-0"></div>
            <div>
              <div
                className="h-[130px] w-[130px] flex items-center justify-center rounded-full mx-auto my-4 -mt-2 ml-10"
                onMouseEnter={() => setTooltipStatus(7)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <img
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1660830350/Icons/Why%20GarbhaGudi/World-Class-Lab_yerlf1.png"
                  alt=""
                  className="hover:scale-115 transition-all duration-500"
                />
                {tooltipStatus == 7 && (
                  <div className="absolute text-sm mt-44">
                    World-class Labrotories
                  </div>
                )}
              </div>
            </div>
            <div>
              <div
                className="h-[130px] w-[130px] flex items-center justify-center rounded-full mx-auto my-4 -mt-2 mr-10 "
                onMouseEnter={() => setTooltipStatus(8)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <img
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1660830350/Icons/Why%20GarbhaGudi/Cutting-Edge_qpqb9w.png"
                  alt=""
                  className="hover:scale-115 transition-all duration-500"
                />
                {tooltipStatus == 8 && (
                  <div className="absolute text-sm mt-44 ">
                    Cutting Edge Technologies
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPC;
