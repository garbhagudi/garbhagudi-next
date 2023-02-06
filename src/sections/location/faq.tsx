import React, { useState, useEffect } from "react";

const q1Options = [
  "IVF treatment is typically recommended for couples who have been trying to conceive for at least one year without success, or for those who have been diagnosed with infertility. It may also be an option for individuals or couples with certain medical conditions, such as endometriosis or male factor infertility.",
  "Individuals who are having difficulties with infertility and are unable to conceive naturally can opt for IVF treatment. It is recommended for individuals with conditions such as blocked fallopian tubes, low sperm count, endometriosis, or ovulation disorders.",
  "IVF is a fertility treatment for individuals and couples facing infertility issues such as irregular ovulation, damaged fallopian tubes, low sperm count, unexplained infertility, or genetic disorders. Consult a fertility specialist to determine if IVF is appropriate.",
];
const q2Options = [
  "GarbhaGudi is a leading fertility clinic that offers affordable IVF treatment options and a holistic approach to care. They have top infertility specialists on staff and provide personalized treatment plans to increase the chances of success.",
  "GarbhaGudi IVF Centre offers a combination of affordable pricing, advanced medical facilities and a holistic approach to fertility treatment, making it a top choice for individuals seeking fertility solutions. With a team of highly skilled fertility specialists, they are dedicated to providing the highest standard of care to help couples achieve their dream of starting a family.",
  "GarbhaGudi IVF Centre offers affordable, state-of-the-art fertility treatments with a holistic approach and top fertility specialists. Their commitment to providing high-quality, personalized care and advanced technology makes them a leading choice for those seeking IVF and other fertility treatments.",
];
const q3Options = [
  "The length of the IVF process can vary depending on a number of factors, such as the individual's fertility status and the specific treatment plan. Typically, the process can take several weeks to several months from start to finish, including the initial consultation, hormone therapy, egg retrieval, fertilization, and embryo transfer.",
  "The IVF process typically takes around 4 to 6 weeks from start to finish, but the exact duration can vary depending on the individual case. The process typically involves various stages, including ovarian stimulation, egg retrieval, fertilization, embryo development, and embryo transfer. Some individuals may also require additional tests or procedures, which can add to the overall length of the IVF process.",
  "The length of the IVF process from start to finish can vary, but it typically takes about 4 to 6 weeks. The process usually involves several stages, including ovarian stimulation, egg retrieval, fertilization, embryo development, and embryo transfer. The exact duration of the IVF process can depend on individual circumstances, such as the specific fertility issues being addressed and the availability of resources. It's best to consult a fertility specialist for a more accurate estimate for your individual case.",
];
const q4Options = [
  "Some discomfort or mild pain may be associated with certain parts of the IVF process, such as the hormone injections or the egg retrieval procedure. However, IVF is generally not considered a painful process and most patients do not experience significant pain. Your doctor may provide you with pain medication to help manage any discomfort.",
  "IVF can cause some discomfort or mild pain during certain stages of the process, such as the egg retrieval procedure or the transfer of embryos back into the uterus. However, these procedures are usually performed under sedation or local anesthesia and are designed to minimize pain and discomfort as much as possible. Overall, most patients report only mild to moderate discomfort during the IVF process and are able to manage their symptoms with pain medication if needed. It's important to talk to your fertility specialist about any concerns or questions you have about the level of discomfort associated with IVF.",
  "IVF can cause some level of discomfort or mild pain during certain stages of the procedure, such as during the egg retrieval or embryo transfer. These procedures are usually performed under sedation or local anesthesia to minimize discomfort. Many patients report only mild to moderate discomfort during the IVF process, and pain medication can be used to manage symptoms if necessary. It is important to discuss any concerns or questions about the level of discomfort associated with IVF with your fertility specialist.",
];
const q5Options = [
  "Before starting IVF treatment, patients will typically undergo a series of tests to evaluate their overall health and fertility. This may include blood tests, semen analysis, pelvic ultrasound, and other diagnostic tests as recommended by the specialist. These tests are done to determine the cause of infertility and to create a personalized treatment plan for the patient.",
  "Before starting IVF, a fertility specialist may require several tests such as fertility testing, hormonal blood tests, ultrasound, STI testing, and chromosomal testing. These tests help assess fertility and identify any health issues that could affect the success of the procedure. The specific tests needed depend on individual circumstances and will be determined by a fertility specialist.",
  "Before starting IVF, tests may include fertility testing, hormonal blood tests, ultrasound, STI testing, and chromosomal testing. Your fertility specialist will determine which tests are necessary based on your medical history and potential risk factors.",
];

const Faq = ({ branch }) => {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");

  useEffect(() => {
    const randomIndex1 = Math.floor(Math.random() * q1Options.length);
    const randomIndex2 = Math.floor(Math.random() * q2Options.length);
    const randomIndex3 = Math.floor(Math.random() * q3Options.length);
    const randomIndex4 = Math.floor(Math.random() * q4Options.length);
    const randomIndex5 = Math.floor(Math.random() * q5Options.length);

    setAnswer1(q1Options[randomIndex1]);
    setAnswer2(q2Options[randomIndex2]);
    setAnswer3(q3Options[randomIndex3]);
    setAnswer4(q4Options[randomIndex4]);
    setAnswer5(q5Options[randomIndex5]);
  }, []);

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
              <p className="md:pl-0 md:col-span-7">{answer1}</p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                Why Choose GarbhaGudi?
              </h3>
              <p className="md:pl-0 md:col-span-7">{answer2}</p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                How long is the IVF process from start to finish?
              </h3>
              <p className="md:pl-0 md:col-span-7">{answer3}</p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                Is IVF a painful process?
              </h3>
              <p className="md:pl-0 md:col-span-7">{answer4}</p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                What Tests Need to Be Done before Starting IVF Treatment?
              </h3>
              <p className="md:pl-0 md:col-span-7">{answer5}</p>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
