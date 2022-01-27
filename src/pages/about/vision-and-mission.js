import React from "react";

const VisionMission = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <h2 className="title-font text-3xl font-heading font-semibold text-brandliteGray mt-6 mb-3">
                Vision
              </h2>
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full mb-2"
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643278927/About/1201x501_Vision_c6ds1h.jpg"
                />
              </div>

              <p className="leading-relaxed text-lg font-content text-left text-brandDark mt-2">
                A mission followed by dedication and hard work turns into a
                vision. Enormous amount of hard work goes into reaching out to
                more and more people and create an awareness about infertility
                and treatments for infertility. With a vision to help nurture
                the happiest moments of life, our vision is to reach far and
                wide, to have Garbhagudi as a globally renowned health
                university with superlative success rate, strong scientific
                approach, ethical values, and humane touch.
              </p>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <h2 className="title-font text-3xl text-brandliteGray mt-6 mb-3 font-heading font-semibold">
                Mission
              </h2>
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full mb-2"
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643278945/About/1201x501_Mission_wcctgt.jpg"
                />
              </div>

              <p className="leading-relaxed font-content text-lg text-left text-brandDark mt-2">
                Dr. Asha S. Vijay, a post graduate in Obstetrics &amp;
                Gynecology from the prestigious Bangalore Medical College,
                started her career with Kidwai Institute of Oncology, Bangalore
                and subsequently set up her own practice with Sannidhi
                Multi-Specialty Hospital. In years of her career, she saw the
                struggle of infertility patients. Her observation of people
                having misconceptions about infertility and infertility
                treatments, cost, and procedure, motivated her to help and guide
                people with reproductive disorders, who were clueless about the
                right approach. It was at that time that she started on a
                mission and the result of such a mission is what GarbhaGudi
                exists today.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;
