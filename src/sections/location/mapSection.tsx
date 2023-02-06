import React from "react";
import Link from "next/link";
import { RichText } from "@graphcms/rich-text-react-renderer";

const MapSection = ({ maplink, address, description, doctors, title }) => {
  return (
    <div className="px-3">
      <div className="text-gray-600 body-font relative max-w-7xl mx-auto">
        <div className="py-6 flex flex-wrap lg:flex-nowrap inset-0 ">
          <div className="lg:w-1/2 bg-gray-300 rounded-3xl overflow-hidden p-2 lg:p-10 flex items-end justify-start relative h-[42rem] md:ml-auto w-full">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              loading="lazy"
              title="map"
              src={maplink}
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded-3xl shadow-3xl">
              <div className="lg:w-1/2 px-6">
                <div className="title-font font-semibold text-gray-900 tracking-widest text-xs font-qs">
                  ADDRESS
                </div>
                <p className="mt-1 font-content text-sm">{address}</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <div className="font-semibold text-gray-900 tracking-widest text-xs font-qs">
                  EMAIL
                </div>
                <div className="text-indigo-500 leading-relaxed">
                  <Link
                    href="mailto:dreams@garbhagudi.com"
                    className="text-brandPink font-qs text-sm"
                  >
                    dreams@garbhagudi.com
                  </Link>
                </div>
                <div className="font-semibold text-gray-900 tracking-widest text-xs mt-4 font-qs">
                  PHONE
                </div>
                <p className="leading-relaxed font-qs text-sm">
                  <Link href="tel:+918880000909">+91 888 000 0909</Link>
                </p>
                <div className="font-semibold text-gray-900 tracking-widest text-xs mt-4 font-qs">
                  WhatsApp
                </div>
                <p className="leading-relaxed font-qs text-sm">
                  <Link
                    href="https://wa.me/918884183338?text=Hi."
                    target="_blank"
                    rel="noreferrer"
                  >
                    +91 888 418 3338
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 px-6 font-content flex flex-col items-center">
            <h3 className="py-3 text-xl lg:text-2xl font-heading font-bold">
              GarbhaGudi IVF Centre, {title}
            </h3>
            <RichText content={description} />
          </div>
        </div>
        <div className="w-full bg-white flex flex-col pb-8 md:mt-0">
          <h2 className="text-center font-heading text-2xl font-semibold py-10 lg:mt-0">
            Fertility Specialists at {title}
          </h2>
          <div className="mx-auto space-y-0 grid grid-cols-2 sm:gap-y-10 sm:gap-x-32 sm:space-y-0 lg:grid-cols-4 lg:max-w-7xl col-span-full">
            {doctors?.map((item: any) => {
              return (
                <div
                  className="text-center mb-2 transition-all duration-500 hover:shadow-2xl rounded-xl"
                  key={item?.id}
                >
                  <Link href={`/fertility-experts/${item?.slug}`} passHref>
                    <div>
                      <div className="space-y-4">
                        <img
                          className="mx-auto h-40 w-40 my-auto rounded-full mt-4"
                          src={item?.image?.url}
                          alt={item?.name}
                        />
                        <div className="space-y-4">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3 className="text-brandDark font-content">
                              {item?.name}
                            </h3>
                            <p className="text-brandPurple text-sm font-content">
                              {item?.qualification}
                            </p>
                            <p className="text-brandPink text-sm font-content">
                              {item?.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
