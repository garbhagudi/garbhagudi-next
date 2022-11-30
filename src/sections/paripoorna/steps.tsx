import React from "react";
import Link from "next/link";
import Image from "next/image";

const Steps = () => {
  return (
    <div
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8 lg:py-24"
      id="how-to"
    >
      <h3 className="text-3xl lg:text-4xl font-heading font-bold text-center mb-14">
        How to Avail the Paripoorna Benefit
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3 font-content">
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded bg-brandPink">
                1
              </span>
              <p className="text-lg font-semibold sm:text-base">
                Obtain the Offer Code from GG-CARE
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Visit{" "}
              <Link href="/gg-care">
                <span className="text-brandPink hover:underline">GG-CARE</span>
              </Link>{" "}
              and contact our representatives to check weather you are eligible
              for the benefit. If eligible, you'll be provided with an offer
              code.
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium rounded bg-brandYellow">
                2
              </span>
              <p className="text-lg font-semibold sm:text-base">
                Visit GarbhaGudi
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Visit the nearest GarbhaGudi branch. GarbhaGudi has 5 infertility
              centres across Bangalore. Click{" "}
              <Link href={"/gg-care"}>
                {" "}
                <span className="text-brandPink hover:underline">
                  here
                </span>{" "}
              </Link>{" "}
              to check the nearest branch.
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded bg-brandPurpleDark">
                3
              </span>
              <p className="text-lg font-semibold sm:text-base">
                Fill the Application Form
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Consult the doctor and fill the form provided by the executives at
              the branch. To book an appointment online please visit{" "}
              <Link href={"https://consult.bestdocapp.com/home/GARBHAGUDI"}>
                {" "}
                <span className="text-brandPink hover:underline">
                  here
                </span>.{" "}
              </Link>
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white bg-brandliteGray">
                4
              </span>
              <p className="text-lg font-semibold sm:text-base">Approval</p>
            </div>
            <p className="text-sm text-gray-900">
              Sit back and relax! Your Application will be carefully verified
              and the relevant benefits will be applied.
            </p>
          </div>
        </div>
        <div className="relative md:col-span-2 lg:col-span-2">
          <Image
            className="inset-0 object-cover object-bottom w-full rounded shadow-lg lg:absolute"
            width={1024}
            height={1024}
            src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1669644725/paripoorna/Paripoorna_2022_Couple_Hor-min-compressed_xhckqj.jpg"
            alt="couple with baby picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;
