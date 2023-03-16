import React from "react";
import Link from "next/link";
import AccordionLayout from "sections/Faq/FaqLayout";

const Faq = () => {
  const [activeIndex1, setActiveIndex1] = React.useState(1);
  return (
    <div>
      <div className="bg-fuchsia-50 mt-6">
        <h2 className="pt-10 lg:pt:16 text-3xl lg:text-4xl font-heading font-bold text-center">
          Frequently asked questions
        </h2>
        <div className="pb-10 lg:pb-16 px-3">
          <div className="flex flex-col justify-center max-w-6xl mx-auto mt-10">
            {data.map((items) => (
              <AccordionLayout
                title={items.Question}
                key={items.id}
                index={items.id}
                activeIndex={activeIndex1}
                setActiveIndex={setActiveIndex1}
              >
                {items.Answer}
              </AccordionLayout>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

const data = [
  {
    id: 1,
    Question: "What is the average IVF cost in Bangalore?",
    Answer: (
      <p className="md:pl-0 md:col-span-7">
        The cost of in vitro fertilization (IVF) can vary widely depending on
        various factors such as the location of the treatment, the specific IVF
        protocol being used, and the individual patient's medical history and
        fertility challenges. In general, the{" "}
        <Link
          href={"/treatments/ivf-treatment-cost-in-bangalore"}
          className="text-brandPink hover:underline"
        >
          cost of IVF treatment in Bangalore
        </Link>{" "}
        can range from around INR 1,50,000 to INR 3,50,000 per cycle, although
        some clinics may charge more or less. It is important to note that the
        cost of IVF can add up quickly, as most patients require multiple cycles
        to achieve a successful pregnancy. Some patients may also require
        additional procedures or medications, which can further increase the
        overall cost of treatment.
      </p>
    ),
  },
  {
    id: 2,
    Question: "IVF Treatment Centres in Bangalore?",
    Answer: (
      <div className="md:pl-0 md:col-span-7">
        GarbhaGudi is a place where dreams come alive, hopes never fade, and
        possibilities never end. We strive tirelessly to assist you to treasure
        the golden moment of holding your little bundles of joy. <br />
        <br /> You no longer need to go long distances for fertility treatments!
        GarbhaGudi now has five strategically positioned branches in Bengaluru
        and wants to expand to additional places in the near future. Our
        branches are located in
        <ul className="mt-4 space-y-2">
          <li>
            <Link
              href={"/locations/hanumanthanagar"}
              className="text-brandPurpleDark hover:text-brandPink hover:underlink"
            >
              HanumanthaNagar
            </Link>
          </li>
          <li>
            <Link
              href={"/locations/kalyan-nagar"}
              className="text-brandPurpleDark hover:text-brandPink hover:underlink"
            >
              Kalyan Nagar
            </Link>
          </li>
          <li>
            <Link
              href={"/locations/electronic-city"}
              className="text-brandPurpleDark hover:text-brandPink hover:underlink"
            >
              Electronic City
            </Link>
          </li>
          <li>
            <Link
              href={"/locations/jayanagar"}
              className="text-brandPurpleDark hover:text-brandPink hover:underlink"
            >
              Jayanagar
            </Link>
          </li>
          <li>
            <Link
              href={"/locations/marathahalli"}
              className="text-brandPurpleDark hover:text-brandPink hover:underlink"
            >
              Marathahalli
            </Link>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    Question:
      "What is Success rate and Risk percentage involved in IVF treatment?",
    Answer: (
      <p className="md:pl-0 md:col-span-7">
        The success rate of in vitro fertilization (IVF) can vary widely
        depending on several factors, including the patient's age, the cause of
        infertility, and the quality of the embryos. In general, the overall
        success rate of IVF is about 35% for women under the age of 35,
        declining to about 10-20% for women over the age of 40. However, it is
        important to note that these are just estimates, and the actual success
        rate can vary widely from one patient to another. <br />
        <br />
        As for the risks involved in{" "}
        <Link
          href={"/treatments/in-vitro-fertilization-ivf"}
          className="text-brandPink hover:underline"
        >
          IVF treatment,{" "}
        </Link>
        they are generally minimal and most patients do not experience any
        serious complications. Some common side effects of IVF may include
        bloating, cramping, breast tenderness, and mood changes. More serious
        risks, such as bleeding or infection, are rare but can occur.
        Additionally, there is a small risk of multiple pregnancies, which can
        pose additional health risks for both the mother and the babies.
      </p>
    ),
  },
  {
    id: 4,
    Question:
      "What are the additional costs related to IVF Treatment in Bangalore and nearby areas?",
    Answer: (
      <div className="md:pl-0 md:col-span-7">
        There are several additional costs that can be associated with in vitro
        fertilization (IVF) treatment. These can include:
        <ul className="my-4 space-y-2">
          <li>
            <strong>Medications:</strong> The medications needed to stimulate
            egg production and prepare the uterus for pregnancy can be
            expensive. These medications are usually not covered by insurance.
          </li>
          <li>
            <strong>Genetic testing:</strong> Pre-implantation genetic testing
            (PGT) can be done to check the health of the embryos before they are
            transferred to the uterus. This can cost several thousand dollars
          </li>
          <li>
            <strong>Anesthesia:</strong> Some patients may need to be sedated
            for the egg retrieval procedure, which can add to the cost of the
            treatment.
          </li>
          <li>
            <strong>Storage of frozen embryos:</strong> If you have leftover
            embryos after the IVF cycle, you may choose to have them frozen for
            future use. This can cost several hundred dollars per year for
            storage fees.
          </li>
          <li>
            <strong>Multiple cycles:</strong> It is common for patients to need
            more than one cycle of IVF in order to become pregnant. Each
            additional cycle can add to the overall cost of treatment.
          </li>
          <li>
            <strong>Gestational surrogacy:</strong> If you are unable to carry a
            pregnancy to term, you may choose to use a gestational surrogate.
            This can add to the cost of the treatment, as you will need to pay
            the surrogate's fees as well as any additional medical expenses.
          </li>
        </ul>
        It is important to discuss the potential{" "}
        <Link
          href={"/treatments/ivf-treatment-cost-in-bangalore"}
          className="text-brandPink hover:underline"
        >
          costs of IVF treatment
        </Link>{" "}
        with your doctor and fertility clinic in order to fully understand the
        expenses you may incur.
      </div>
    ),
  },
];
