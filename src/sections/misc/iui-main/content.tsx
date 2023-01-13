import React from "react";
import Link from "next/link";

type Props = {};

const Content = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <h3 className="text-2xl lg:text-3xl font-heading font-bold text-center py-10 lg:py-16">
        What Is IUI ?
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-3 font-content px-3 max-w-prose ">
          <h3 className="text-lg font-heading font-bold pb-6">Introduction</h3>
          <div>
            IUI (Intrauterine Insemination) is a fertility treatment procedure
            in which sperm is placed directly inside a woman's uterus to
            increase the chance of pregnancy. It is a relatively simple and
            low-invasive procedure, often used in cases of infertility caused by
            issues with ovulation, sperm count, or cervical mucus. It may be
            used alone or in combination with other fertility treatments, such
            as ovulation induction medications. The success rate of IUI varies
            depending on the individual patient's circumstances, and it is
            typically more successful when performed in conjunction with other
            fertility treatments.
          </div>
        </div>
        <div className="col-span-1 px-3">
          <h3 className="text-lg font-heading font-bold pt-5 lg:pt-0 pb-6">
            Quick Links
          </h3>
          <div className="font-content">
            <ul className="space-y-3">
              <li className="hover:underline hover:text-brandPink">
                <Link href="#iui-centres-in-bangalore">
                  IUI Centres in Bangalore
                </Link>
              </li>
              <li className="hover:underline hover:text-brandPink">
                <Link href="#cost-of-iui-in-bangalore">
                  Cost of IUI in Bangalore
                </Link>
              </li>
              <li className="hover:underline hover:text-brandPink">
                <Link href="#procedure-of-iui">Procedure of IUI</Link>
              </li>
              <li className="hover:underline hover:text-brandPink">
                <Link href="#faq">Frequently asked questions on IUI</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;