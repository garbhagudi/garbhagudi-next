import React from "react";

const Faq = () => {
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
                What is In Vitro Fertilization?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                In infertile couples where women have blocked or absent
                fallopian tubes, or where men have low sperm counts, in vitro
                fertilization (IVF) offers a chance of parenthood to couples who
                until recently would had no hope of having a "biologically
                related" child.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                Is In Vitro Fertilization Expensive?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                Like other extremely delicate medical procedures, IVF involves
                highly trained professionals with sophisticated laboratories and
                equipment, and the cycle may need to be repeated to be
                successful.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                Does In Vitro Fertilization Work?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                Yes. Since 1985, when we began counting, through 2017, 1,204,594
                babies have been born in the United States as a result of
                reported Assisted Reproductive Technology procedures (IVF, GIFT,
                ZIFT, and combination procedures).
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                Do Insurance Plans Cover Infertility Treatment?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                The degree of services covered depends on where you live and the
                type of insurance plan you have.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                Why am I not responding to the drugs for ovarian stimulation?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                A response to ovarian stimulation depends on a number of
                different factors, the most important include available eggs,
                appropriate hormone levels, proper administration of any
                medications and lifestyle/environmental factors.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                Should we have genetic testing?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                Preimplantation genetic testing (PGT) is a technique in which
                one or more cells is taken from an egg or embryo (fertilized
                egg) for testing to provide information about the genetic
                make-up of the rest of the cells in that embryo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
