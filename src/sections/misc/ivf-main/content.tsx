import React from "react";

const Content = () => {
  return (
    <div className="scroll-m-16 scroll-smooth" id="know-more">
      <div className="bg-white relative pt-10 lg:pt-24">
        <div className="relative container m-auto px-3 md:px-12 lg:px-6">
          <h2 className="mx-auto font-black text-4xl text-left lg:text-5xl font-heading">
            What is IVF and how does it work ?
          </h2>{" "}
          <div className="md:flex mx-auto flex-wrap">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative font-content mt-8 md:mt-16 space-y-8 ml-0 mx-auto text-left md:max-w-lg lg:max-w-2xl">
                <p className="">
                  IVF or In Vitro Fertilization is one of the more widely known
                  types of Assisted Reproductive Techniques (ART). IVF works by
                  using a combination of medicines and surgical procedures, to
                  help the sperm fertilize an egg. Here the eggs are fertilized
                  outside the human body and implanted in the uterus. These
                  procedures can be used to help couples struggling with
                  infertility and also in the prevention of genetic problems.
                </p>
                <h2 className="text-lg font-bold font-heading">
                  What is the Process of IVF Treatment in Bangalore?
                </h2>
                <div>
                  Here is a general overview of the steps involved in a typical
                  IVF cycle:
                </div>
                <ul className="space-y-3">
                  <li>
                    <strong>Initial consultation:</strong> The first step in the
                    IVF process is usually a consultation with a fertility
                    specialist. During this appointment, the specialist will
                    discuss the person's medical history, perform a physical
                    examination, and order any necessary tests to determine the
                    cause of infertility.
                  </li>
                  <li>
                    <strong>Ovarian stimulation:</strong> The next step is to
                    stimulate the production of multiple eggs. This is typically
                    done using injectable medications, such as gonadotropins or
                    gonadotropin-releasing hormone agonists. The goal is to
                    produce several mature eggs that can be retrieved and
                    fertilized during the IVF process.
                  </li>
                  <li>
                    <strong>Egg retrieval:</strong> Once the eggs are mature,
                    they are retrieved using a procedure called transvaginal
                    ultrasound-guided oocyte retrieval. This procedure is
                    performed under conscious sedation or general anesthesia and
                    involves inserting a needle through the vagina and into the
                    ovaries to remove the eggs.
                  </li>
                </ul>
              </div>
              <div className="mt-4 mx-auto  -right-0 max-w-[50rem] lg:p-4">
                <div className="relative w-full">
                  <img
                    src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1671177124/Misc/PNG_25_yoa08y.png"
                    className="relative  w-full"
                    alt="wath illustration"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div>
              <ul className="font-content space-y-3 pt-3">
                <li>
                  <strong>Fertilization:</strong> The retrieved eggs are mixed
                  with sperm in a laboratory setting to allow fertilization to
                  occur. If the fertilized eggs are deemed to be healthy and
                  viable, they are allowed to grow for a few more days in the
                  laboratory.
                </li>
                <li>
                  <strong>Embryo transfer:</strong> If the fertilized eggs have
                  developed into embryos, one or more of them may be transferred
                  to the uterus. The embryo transfer procedure is usually
                  performed a few days after the egg retrieval procedure and
                  involves inserting a thin tube through the cervix and into the
                  uterus. The embryos are then gently placed into the uterus.
                </li>
                <li>
                  <strong>Pregnancy test:</strong> A pregnancy test is usually
                  performed about two weeks after the embryo transfer procedure
                  to determine whether or not the IVF cycle was successful. If
                  the test is positive, the person is considered pregnant.
                </li>
              </ul>
            </div>
            <div className="mt-8 font-content ">
              One full IVF cycle takes about three weeks but sometimes the
              procedure is split into parts, to manage certain challenges in the
              couples. This may delay the process. IVF can be done using the
              woman’s eggs and the male partner’s sperm or it may involve sperm,
              eggs or embryos from anonymous donors. Sometimes a gestational
              carrier (a woman who has an embryo implanted in her uterus) might
              be used. Such a carrier is called a surrogate mother and the
              process is called surrogacy.
              <br />
              <br />
              It is important to note that not all IVF cycles result in
              pregnancy, and it may be necessary to try multiple cycles before
              achieving a successful pregnancy. The success rate of IVF depends
              on a variety of factors, including the person's age, the cause of
              infertility, and the quality of the eggs and sperm.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
