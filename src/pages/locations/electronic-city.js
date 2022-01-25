import React from "react";
import { gql, GraphQLClient } from "graphql-request";
import Link from "next/link";

const ElectronicCity = ({ doctors }) => {
  return (
    <div>
      <section className="text-gray-600 body-font relative max-w-7xl mx-auto">
        <h1 className="text-center text-2xl md:text-4xl font-heading pt-8 font-bold">
          Electronic City
        </h1>
        <div>
          <img
            src="https://dummyimage.com/1280x500/000/fff.jpg&text=1280x500"
            alt="banner"
            className="rounded-xl mt-4"
          />
        </div>
        <div className="py-6 flex flex-wrap lg:flex-nowrap inset-0 ">
          <div className="lg:w-1/2 md:w-full bg-white flex flex-col md:ml-auto w-full pb-8 md:mt-0 min-h-max">
            <p className="text-center font-qs text-2xl font-semibold mb-10 mt-7 lg:mt-0">
              Fertility Specialists at Electronic City
            </p>
            <div className="mx-auto space-y-0 grid grid-cols-2 sm:gap-y-10 sm:gap-x-32 sm:space-y-0 lg:grid-cols-2 lg:max-w-7xl col-span-full">
              {doctors.map((item) => {
                if (item.location.includes("ElectronicCity")) {
                  return (
                    <div className="text-center" key={item.id}>
                      <Link href={`/doctors/${item.slug}`} passHref>
                        <a>
                          <div className="space-y-4">
                            <img
                              className="mx-auto h-40 w-40 my-auto rounded-full mt-4"
                              src={item.image.url}
                              alt={item.name}
                            />
                            <div className="space-y-4">
                              <div className="text-lg leading-6 font-medium space-y-1">
                                <h3 className="text-brandDark font-content">
                                  {item.name}
                                </h3>
                                <p className="text-brandPurple text-sm font-content">
                                  {item.qualification}
                                </p>
                                <p className="text-brandPink text-sm font-content">
                                  {item.designation}
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="lg:w-1/2 bg-gray-300 rounded-3xl overflow-hidden p-2 lg:p-10 flex items-end justify-start relative h-[44rem] md:ml-auto w-full">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124455.97184736053!2d77.5509549079939!3d12.891696289434682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c972baa2581%3A0x38dd3f8049f5f606!2sGarbhaGudi%20IVF%20Centre%2C%20Electronic%20City.!5e0!3m2!1sen!2sin!4v1641809188374!5m2!1sen!2sin"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded-3xl shadow-3xl">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs font-qs">
                  ADDRESS
                </h2>
                <p className="mt-1 font-content">
                  Ganesh Towers,3rd Floor, 60/5 and 60/6, NH 44, Beside Andhra
                  Bank, Konappana Agrahara, Electronic City, Bengaluru,
                  Karnataka 560100
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="font-semibold text-gray-900 tracking-widest text-xs font-qs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  <a
                    href="mailto:dreams@garbhagudi.com"
                    className="text-brandPink font-qs"
                  >
                    dreams@garbhagudi.com
                  </a>
                </a>
                <h2 className="font-semibold text-gray-900 tracking-widest text-xs mt-4 font-qs">
                  PHONE
                </h2>
                <p className="leading-relaxed font-qs">
                  <a href="tel:+918880000909">+91 888 000 0909</a>
                </p>
                <h2 className="font-semibold text-gray-900 tracking-widest text-xs mt-4 font-qs">
                  WhatsApp
                </h2>
                <p className="leading-relaxed font-qs">
                  <a
                    href="https://wa.me/918884183338?text=Hi."
                    target="_blank"
                    rel="noreferrer"
                  >
                    +91 888 418 3338
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center text-2xl md:text-4xl font-heading py-8 font-bold mx-auto">
          Virtual Tour
        </h1>
        <p className="text-center font-qs font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aut
          tenetur cumque accusantium ab, ea possimus itaque. Optio quaerat,
          incidunt, ex eligendi impedit doloremque adipisci, eveniet nulla
          quibusdam laudantium quam.
        </p>
        <ul className="mx-auto grid grid-cols-1 sm:gap-x-0 py-8 px-2 lg:grid-cols-3 max-w-7xl">
          <li>
            <div className="space-y-4">
              <div className="bg-gray-300 rounded-3xl overflow-hidden sm:mr-10 p-10 relative h-[24rem] mx-auto mt-4">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  frameBorder="0"
                  title="map"
                  marginHeight="0"
                  marginWidth="0"
                  scrolling="no"
                  src="https://www.google.com/maps/embed?pb=!4v1641889154065!6m8!1m7!1sCAoSLEFGMVFpcE9WU3hyTWxXckFFeUpNdWxsY2szbFBwSWt0VVJqazdfU042NWJs!2m2!1d12.854870218893!2d77.668007095815!3f40.12!4f-0.06999999999999318!5f0.5817734458111704"
                ></iframe>
              </div>
            </div>
          </li>
          <li>
            <div className="space-y-4">
              <div className="bg-gray-300 rounded-3xl overflow-hidden sm:mr-10 p-10 relative h-[24rem] mx-auto mt-4">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  frameBorder="0"
                  title="map"
                  marginHeight="0"
                  marginWidth="0"
                  scrolling="no"
                  src="https://www.google.com/maps/embed?pb=!4v1641889217753!6m8!1m7!1sCAoSLEFGMVFpcE9sR2V4ZzVGVERPMExuRXJJd1EyUmVhMWJxTm9DbW9QMmk3djF4!2m2!1d12.854848216734!2d77.668009004809!3f329.79!4f-17.040000000000006!5f0.5970117501821992"
                ></iframe>
              </div>
            </div>
          </li>
          <li>
            <div className="space-y-4">
              <div className="bg-gray-300 rounded-3xl overflow-hidden sm:mr-10 p-10 relative h-[24rem] mx-auto mt-4">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  frameBorder="0"
                  title="map"
                  marginHeight="0"
                  marginWidth="0"
                  scrolling="no"
                  src="https://www.google.com/maps/embed?pb=!4v1641889260991!6m8!1m7!1sCAoSLEFGMVFpcE9lSzV1OHFPQTI0ckFhMnpRa3lUNEF6SS0wQVA3UWNzNldXUkh0!2m2!1d12.854878025849!2d77.667999451136!3f0!4f0!5f0.7820865974627469"
                ></iframe>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ElectronicCity;

export const getServerSideProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });
  const query = gql`
    query {
      doctors {
        name
        qualification
        slug
        location
        image {
          url
        }
        medicalRegNo
        id
        designation
      }
    }
  `;
  const data = await graphQLClient.request(query);
  const doctors = data.doctors;
  return {
    props: {
      doctors,
    },
  };
};