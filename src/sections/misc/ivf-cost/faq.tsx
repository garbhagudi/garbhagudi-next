import React from "react";
import Link from "next/link";

const faqs = [
  {
    question: "What is IVF?",
    answer:
      "In vitro fertilisation (IVF) is a complicated set of techniques designed to aid fertility, prevent genetic abnormalities, and aid in childbirth.",
  },
  {
    question: "Is IVF Expensive?",
    answer:
      "An IVF cycle might cost anywhere between Rs 25 thousand and Rs 4 lakhs on average. Additional medications and testing, as well as procedures such as Frozen Embryo Transfer, may be necessary, raising the overall cost.",
  },
  {
    question: "What is the average success rate of IVF?",
    answer: (
      <div>
        In young women, the global average IVF success rate is roughly 40%.
        Women under the age of 35 have a higher likelihood of success. The
        success rate of this most widely used assisted reproductive technology
        (ART) is often assessed in terms of live births per embryo transfer. The
        live birth rate is the number of live births per embryo transfer.
        <br />
        <br />
        At GarbhaGudi, the average success rate of IVF is around 65-73%
      </div>
    ),
  },
  {
    question: "How many times can one try IVF?",
    answer:
      "Many factors influence this, including the age of the female partner, the patient's clinical profile, the patient's past reaction to an IVF cycle, and the financial consequences. If all of the criteria are within range, IVF may usually be attempted 3-4 times.",
  },
  {
    question: "Is IVF harmful?",
    answer:
      "In general, any surgical treatment carries some inherent risk, although the probability of surgical complication during egg harvest is low since it is guided by ultrasound. If the renal and kidney parameters are normal, the egg-producing injections/hormones are eliminated daily in the urine and stools. In terms of OHSS, the incidence of severe form is just 1-2%, necessitating hospitalisation. Mild and severe cases can be addressed in the outpatient department.",
  },
  {
    question: "Is the incidence of birth defects high?",
    answer:
      "Millions of infants have been born with this technique across the world to far, and the research shows that there is no statistically significant increase in the incidence of abnormalities.",
  },
  //
];

const Faq = () => {
  return (
    <div>
      <div className="">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-lg text-gray-900 font-content">
                Can’t find the answer you’re looking for? Reach out to our{" "}
                <Link
                  href="/gg-care"
                  className="font-medium text-brandPink hover:text-brandPink3"
                >
                  customer support
                </Link>{" "}
                team.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-12">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <div className="text-xl text-gray-900 font-heading font-bold">
                      {faq.question}
                    </div>
                    <div className="mt-2 text-lg text-gray-800 font-content">
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
