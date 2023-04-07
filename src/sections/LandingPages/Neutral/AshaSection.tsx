import React from "react";
import MyModal from "components/modal";

const AshaSection = () => {
  return (
    <section className="pt-16 pb-10 bg-gray-50">
      <h3 className="pb-16 text-3xl lg:text-4xl font-heading text-center font-bold text-gray-700">
        Consult Dr. Asha S Vijay
      </h3>
      <div className="w-full lg:max-w-2xl px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-2xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <img
                    alt="Dr Asha"
                    src="https://media.graphassets.com/nwE1f23XRWyvbAAO25qP"
                    className="shadow-2xl rounded-full h-auto align-middle border-none -m-[100px] -ml-[100px] max-w-[200px]"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-32">
              <h3 className="text-xl font-semibold font-content leading-normal mb-2 text-blueGray-700">
                Dr Asha S Vijay
              </h3>
              <div className="text-sm leading-normal font-content mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                MBBS, DNB, DGO
              </div>
              <div className="mb-2 text-blueGray-600 mt-6 font-content font-semibold">
                Founder & Medical Director - GarbhaGudi IVF Centre
              </div>
            </div>
            <div className="mt-4 py-4 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-11/12 px-4">
                  <p className="mb-6 text-base text-blueGray-700 font-content">
                    Dr Asha has well over two decades of experience in the
                    fields of obstetrics, gynaecology and infertility. She is a
                    well-known name in infertility – both in treating patients
                    and also in infertility education. Many consider her as a
                    medical genius with an overarching vision to eradicate
                    infertility. Dr Asha has been instrumental in creating happy
                    endings in the lives of more than 8500+ couples, by ensuring
                    they have a child of their own.
                  </p>
                  <MyModal
                    title={"Consult Dr. Asha S Vijay"}
                    clnm={
                      "font-semibold text-white uppercase px-3 py-2 bg-brandPink rounded-lg"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AshaSection;
