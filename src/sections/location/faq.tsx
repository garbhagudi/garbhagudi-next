import React from "react";
import { doctors } from "sections/LandingPages/Neutral/doctors";
import { contactData } from "sections/gg-care/content";
import Link from "next/link";

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
                Doctors available at GarbhaGudi, {branch}?
              </h3>
              <div className="md:pl-0 md:col-span-7">
                <div className="flex items-center justify-center space-x-5">
                  {doctors.map(
                    (items) =>
                      items.location.includes(branch) && (
                        <div
                          key={items.id}
                          className="flex items-center justify-center flex-col mt-5 lg:mt-0"
                        >
                          <img
                            src={items.image}
                            alt={items.name}
                            className="w-28 rounded-full h-28"
                          />
                          <div className="font-heading font-bold text-base py-2 text-center">
                            {items.name}
                          </div>
                          <div className="text-xs font-semibold font-content text-center">
                            {items.designation}
                          </div>
                          <div className="text-xs font-semibold font-content pt-2 text-center">
                            {items.qualification}
                          </div>
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                How to contact GarbhaGudi IVF Centre in {branch}?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                To contact the fertility specialists at our {branch} branch,
                please visit{" "}
                <Link href={"/gg-care"} className="text-brandPink">
                  GG Care (Support)
                </Link>{" "}
                page. You can find all the information related to {branch}{" "}
                branch and how to contact there. Alternatively, you can use the
                chat feature that the bottom right-hand corner to ask us your
                queries.
                <div className="mt-4">
                  {contactData.locations.map(
                    (items) =>
                      items.name === branch && (
                        <div key={items.id}>
                          <div className="font-semibold">
                            {items.name} branch
                          </div>
                          <div>
                            <Link
                              href={`tel:${items.phone}`}
                              className="text-brandPink hover:underline"
                            >
                              {items.phone}
                            </Link>
                          </div>
                        </div>
                      )
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">
                  {contactData.getInTouch.map((items) => (
                    <div key={items.id}>
                      <div>
                        <div className="font-bold">{items.name}</div>
                        <div>
                          <Link
                            href={`mailto:${items.email}`}
                            className="text-brandPurpleDark hover:underline font-semibold"
                          >
                            {items.email}
                          </Link>
                        </div>
                        <Link
                          href={`tel:${items.phone}`}
                          className="text-brandPink hover:underline"
                        >
                          {items.phone}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                What are our success rates for IVF treatments in {branch}?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                The success rate of of an IVF Treatment depends on numerous
                factors. At our {branch} branch the average success rate ranges
                from 65 - 73%. <br /> <br />
                It's important to note that IVF success rates can also vary
                between fertility clinics, so it's important to do your research
                and choose a reputable clinic with a good track record.
                Additionally, some clinics may have higher success rates for
                certain types of patients or certain IVF procedures.
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
