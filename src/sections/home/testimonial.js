import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const generateDiceBearBottts = (seed) =>
  `https://avatars.dicebear.com/api/jdenticon/${seed}.svg`;

const data = [
  {
    id: "3",
    name: "Venu Athipatla",
    quote:
      "We are feeling so happy and blessed to knew about this place and its amazing hospital with fabulous doctor and staff. Thank you so much to Dr Sophia mam and all the staff members and team. They are very caring and treated very well and all the staff are well behaved. All the test results are accurate and helpful to know the issue and starts treatment within no time. A big thank you to all.",
    logo: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1639556290/logos/google_aenn30.svg",
    profile: generateDiceBearBottts(Math.random()),
  },
  {
    id: "1",
    name: "Jesudas Antonyraj",
    quote:
      "5 star service Always trying to help patients giving right treatment and suggestions. You will feel comfortable in hospital, respect your time and value Everyone in hospital are very proactive on procedure We had very positive news we got after consulting with Dr. Shwetha I will recommend this if you are planning to have baby..and thinking. All the best.",
    logo: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1639556290/logos/google_aenn30.svg",
    profile: generateDiceBearBottts(Math.random()),
  },
  {
    id: "2",
    name: "Shivamurthy",
    quote:
      "Thank you very much for making us happy in welcoming our baby… we got genuine treatment only here… we always get positive energy wennever we come Here .. thank you Dr. maheshwari mam and team.",
    logo: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1639556290/logos/google_aenn30.svg",
    profile: generateDiceBearBottts(Math.random()),
  },

  {
    id: "4",
    name: "Lorem, ipsum.",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam nihil amet, laboriosam temporibus laudantium? Lorem ipsum dolor sit amet.",
    logo: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1639556290/logos/google_aenn30.svg",
    profile: generateDiceBearBottts(Math.random()),
  },
  {
    id: "5",
    name: "Lorem, ipsum.",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam nihil amet, laboriosam temporibus laudantium? Lorem ipsum dolor sit amet.",
    logo: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1639556290/logos/google_aenn30.svg",
    profile: generateDiceBearBottts(Math.random()),
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 560, min: 0 },
    items: 1,
  },
};

const Testimonial = () => {
  return (
    <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel responsive={responsive} ssr={true} infinite={true}>
          {data.map((item) => {
            return (
              <div className="relative" key={item.id}>
                <img className="mx-auto h-8" src={item.logo} alt="Workcation" />
                <blockquote className="mt-10">
                  <div className="max-w-3xl mx-auto text-center text-2xl tracking-tight leading-9 font-medium text-gray-900 font-content">
                    <p>{item.quote}</p>
                  </div>
                  <footer className="mt-8">
                    <div className="md:flex md:items-center md:justify-center">
                      <div className="md:flex-shrink-0">
                        <img
                          className="mx-auto h-14 w-14 rounded-full"
                          src={item.profile}
                          alt={item.name}
                        />
                      </div>
                      <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                        <div className="font-qs font-semibold text-gray-900">
                          {item.name}
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
