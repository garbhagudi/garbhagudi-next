import React from "react";

type Props = {};

const ContentXtra = (props: Props) => {
  return (
    <div
      className="max-w-7xl mx-auto py-10 lg:py-16 scroll-m-10"
      id="procedure-of-iui"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="px-3">
          <h3 className="text-2xl lg:text-3xl font-bold font-heading py-4">
            The Process of IUI Treatment
          </h3>
          <div className="font-content mt-4">
            IUI, or intrauterine insemination, is a fertility treatment
            procedure that involves placing sperm inside a woman's uterus to
            help her become pregnant. Here's a simple explanation of the
            process:
            <ul className="max-w-lg pt-4 space-y-3 list-outside ml-4 list-disc">
              <li>
                The first step is to stimulate the woman's ovaries with
                medication to produce multiple eggs.
              </li>
              <li>
                Next, the sperm is collected from the man or a sperm donor and
                is washed and prepared for the procedure.
              </li>
              <li>
                Then, a thin, flexible tube called a catheter is inserted
                through the cervix and into the uterus.
              </li>
              <li>
                The prepared sperm is then injected into the uterus through the
                catheter.
              </li>
              <li>
                After the procedure, the woman will rest for a short period
                before going home.
              </li>
            </ul>
          </div>
        </div>
        <div className="px-3">
          <img
            src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1674112329/Misc/IUI-Process_01_lo7z7w.png"
            alt="IUI Info"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="mt-4 font-content px-3">
        It's important to note that IUI is usually done in conjunction with
        ovulation induction medications. The success rate for IUI varies
        depending on several factors, including the woman's age and the cause of
        infertility. It's a relatively simple and low-invasive procedure.
      </div>
      <div>
        <h3 className="text-lg font-heading font-bold pt-6 px-3">
          How Does IUI treatment Help in Achieving Pregnancy ?
        </h3>
        <div className="mt-4 font-content px-3">
          IUI helps in pregnancy by increasing the number of sperm that reach
          the fallopian tubes, where fertilization of the egg occurs. By placing
          the sperm directly inside the uterus, the procedure bypasses the
          cervix, which can be a barrier to fertilization. The procedure is
          timed to coincide with ovulation, which increases the chances of the
          sperm meeting and fertilizing an egg. Additionally, IUI can also help
          with cervical mucus issues, which can be a barrier to fertilization.
        </div>
      </div>
    </div>
  );
};

export default ContentXtra;
