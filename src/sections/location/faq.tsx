import React from "react";

const Faq = ({ branch }) => {
  return (
    <div>
      <section className="max-w-7xl mx-auto font-content pt-8">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="mb-8 text-3xl font-bold leading-none text-center sm:text-4xl font-heading">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-gray-700">
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                Who Needs IVF Treatment?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                IVF treatment is typically recommended for couples who have been
                trying to conceive for at least one year without success, or for
                those who have been diagnosed with infertility. It may also be
                an option for individuals or couples with certain medical
                conditions, such as endometriosis or male factor infertility.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                Why Choose GarbhaGudi?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                GarbhaGudi is a leading fertility clinic that offers affordable
                IVF treatment options and a holistic approach to care. They have
                top infertility specialists on staff and provide personalized
                treatment plans to increase the chances of success.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                How long is the IVF process from start to finish?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                The length of the IVF process can vary depending on a number of
                factors, such as the individual's fertility status and the
                specific treatment plan. Typically, the process can take several
                weeks to several months from start to finish, including the
                initial consultation, hormone therapy, egg retrieval,
                fertilization, and embryo transfer.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                Is IVF a painful process?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                Some discomfort or mild pain may be associated with certain
                parts of the IVF process, such as the hormone injections or the
                egg retrieval procedure. However, IVF is generally not
                considered a painful process and most patients do not experience
                significant pain. Your doctor may provide you with pain
                medication to help manage any discomfort.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                What is the total cost of IVF in <strong>{branch}</strong>?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                The total cost of IVF in <strong>{branch}</strong> can vary
                depending on the individual patient's needs. On average, the
                cost of a single IVF cycle in <strong>{branch}</strong> can
                range from INR 1,50,000 to INR 3,00,000. However, some
                additional services such as genetic testing or use of donor
                eggs/sperm may cost additional sum. It's important to speak with
                a specialist at the clinic to understand the total cost and any
                additional fees that may apply.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                What Tests Need to Be Done before Starting IVF Treatment?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                Before starting IVF treatment, patients will typically undergo a
                series of tests to evaluate their overall health and fertility.
                This may include blood tests, semen analysis, pelvic ultrasound,
                and other diagnostic tests as recommended by the specialist.
                These tests are done to determine the cause of infertility and
                to create a personalized treatment plan for the patient.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;

const Data = [
  {
    id: 1,
    q: "Who Needs IVF Treatment?",
    a: "IVF treatment is typically recommended for couples who have been trying to conceive for at least one year without success, or for those who have been diagnosed with infertility. It may also be an option for individuals or couples with certain medical conditions, such as endometriosis or male factor infertility.",
  },
  {
    id: 2,
    q: "Why Choose GarbhaGudi?",
    a: "GarbhaGudi is a leading fertility clinic that offers affordable IVF treatment options and a holistic approach to care. They have top infertility specialists on staff and provide personalized treatment plans to increase the chances of success.",
  },
  {
    id: 3,
    q: "How long is the IVF process from start to finish?",
    a: "The length of the IVF process can vary depending on a number of factors, such as the individual's fertility status and the specific treatment plan. Typically, the process can take several weeks to several months from start to finish, including the initial consultation, hormone therapy, egg retrieval, fertilization, and embryo transfer.",
  },
  {
    id: 4,
    q: "Is IVF a painful process?",
    a: "Some discomfort or mild pain may be associated with certain parts of the IVF process, such as the hormone injections or the egg retrieval procedure. However, IVF is generally not considered a painful process and most patients do not experience significant pain. Your doctor may provide you with pain medication to help manage any discomfort.",
  },
  {
    id: 5,
    q: `What is the total cost of IVF in ?`,
    a: `The total cost of IVF in can vary depending on a number of factors such as location, clinic, and the individual patient's needs. On average, the cost of a single IVF cycle in India can range from INR 1,50,000 to INR 3,00,000. However, some clinics may charge more for additional services such as genetic testing or use of donor eggs/sperm. It's important to speak with a specialist at the clinic to understand the total cost and any additional fees that may apply.`,
  },
  {
    id: 6,
    q: "What Tests Need to Be Done before Starting IVF Treatment? ",
    a: "Before starting IVF treatment, patients will typically undergo a series of tests to evaluate their overall health and fertility. This may include blood tests, semen analysis, pelvic ultrasound, and other diagnostic tests as recommended by the specialist. These tests are done to determine the cause of infertility and to create a personalized treatment plan for the patient.",
  },
];
