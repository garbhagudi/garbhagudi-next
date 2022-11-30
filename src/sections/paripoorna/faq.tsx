import React, { useState } from "react";
import AccordionLayout from "../Faq/FaqLayout";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className="max-w-4xl mx-auto pb-10 px-3 lg:px-0">
      <h3 className="text 3xl lg:text-4xl font-heading font-bold py-10 lg:py-16 text-center">
        Frequently Asked Questions
      </h3>
      {Data.map((items) => (
        <AccordionLayout
          title={items.title}
          key={items.title}
          index={items.title}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          {items.contents}
        </AccordionLayout>
      ))}
    </div>
  );
};

export default FAQ;

const Data = [
  {
    title: "What is the procedure to register for PARIPOORNA offer?",
    contents: (
      <div>
        Visit any of our centres during the registration for PARIPOORNA plan,
        duly fill the form, and submit it to the concerned person.
      </div>
    ),
  },
  {
    title: "Who is eligible for the PARIPOORNA offer?",
    contents: (
      <div>
        This plan is specially designed for couples looking for infertility
        treatment but need financial support.
      </div>
    ),
  },
  {
    title: `Is everyone who registers entitled to receive the benefit?`,
    contents: (
      <div>
        A couple will be eligible for the offer only after proper validation of
        the application and approval by the GarbhaGnan foundation committee.
      </div>
    ),
  },
  {
    title: `What are the criteria for eligibility?`,
    contents: (
      <div>
        This benefit plan/offer is valid only for couples seeking IVF treatment.
        Since eligibility will be validated by the GarbhaGnan Committee, you
        will be able to see your eligibility only after the submission of your
        form.
      </div>
    ),
  },
  {
    title: `If eligible, will I receive treatment plan?`,
    contents: (
      <div>
        Yes, on successful validation and approval, you will be able to receive
        the treatment plan from the doctor.
      </div>
    ),
  },
  {
    title: `Can I continue my treatment without opting PARIPOORNA plan?`,
    contents: (
      <div>
        Yes, this will help other couples in genuine need to avail the benefit.
      </div>
    ),
  },
  {
    title: `What is the last date to apply for PARIPOORNA program?`,
    contents: (
      <div>Register for the PARIPOORNA program before 31st Dec’2022.</div>
    ),
  },
  {
    title: `I have started my treatment at another facility, am I still eligible to avail the PARIPOORNA benefit and pursue treatment at GarbhaGudi?`,
    contents: (
      <div>
        Yes, you can apply, but we recommend you not to discontinue the
        treatment as it could affect the success rate of your treatment.
      </div>
    ),
  },
  {
    title: `Can I register for PARIPOORNA through online without visiting the centre?   `,
    contents: (
      <div>
        This offer is valid only for couples who register at any of our five
        branches.
      </div>
    ),
  },
];
