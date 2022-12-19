import React from "react";

const Content = () => {
  return (
    <div className="">
      <div className="bg-white relative pt-10 lg:pt-24">
        <div className="relative container m-auto px-6 md:px-12 lg:px-6">
          <h2 className="mx-auto font-black text-4xl text-center 2xl:text-left lg:text-5xl font-heading">
            What is IVF and how does it work ?
          </h2>{" "}
          <div className="md:flex mx-auto md:flex-wrap">
            <div className="relative font-content mt-8 md:mt-16 space-y-8 2xl:ml-0 mx-auto text-left md:max-w-2xl">
              <p className="">
                IVF or In Vitro Fertilization is one of the more widely known
                types of Assisted Reproductive Techniques (ART). IVF works by
                using a combination of medicines and surgical procedures, to
                help the sperm fertilize an egg. Here the eggs are fertilized
                outside the human body and implanted in the uterus. These
                procedures can be used to help couples struggling with
                infertility and also in the prevention of genetic problems.
              </p>
              <h2 className="text-lg font-bold font-heading">Introduction</h2>
              <p className="">
                A pregnancy starts with fertilization – when a woman’s egg joins
                with a man’s sperm. Fertilization usually takes place in the
                fallopian tube within the woman, which is a tube-like organ that
                joins an ovary to the uterus. If the fertilized egg ( which is
                now called an embryo)successfully travels down the fallopian
                tube and implants in the uterus, an embryo starts growing on the
                endometrial wall, in the uterus
              </p>
              <p>
                When this normal process of fertilization does not take place in
                couples who are planning to have a baby, advanced techniques of
                Assisted Reproductive Techniques (ART)are utilized to increase
                the chances of conceiving a healthy baby
              </p>
              <h2 className="text-lg font-bold font-heading">
                A typical IVF cycle
              </h2>
              <p>
                In an IVF cycle, eggs are retrieved from the ovaries and sperms
                are collected from the ejaculate (or surgically retrieved from
                the husband’s testes if ejaculation is not possible or if
                ejaculate has no viable sperms). These sperms are then allowed
                to fertilize the egg outside the body, in the laboratory. This
                fertilization can happen if the sperm and eggs are kept close to
                each other (called conventional IVF) or are forced by pushing
                the sperm into the egg (through a process called ICSI). The
                fertilized eggs are then cultured and ‘grown’ in the lab in
                conditions that mimic the woman’s uterus. The fertilized egg
                gets all nourishment from the culture media that it is kept in.
                An embryologist monitors the growth of the embryo. When the
                embryo has grown sufficiently, it is either transferred into the
                uterus of the woman (called fresh embryo transfer) or is frozen
                for a future transfer (called frozen embryo transfer).
              </p>
            </div>
            <div className="mt-12 md:mt-10 mx-auto 2xl:absolute -right-10 max-w-4xl">
              <div className="relative w-full">
                <div
                  aria-hidden="true"
                  className="absolute mx-auto scale-100 xl:scale-110 lg:mt-36 inset-0 w-full h-full md:w-96 md:h-96 rounded-full bg-gradient-to-r from-brandPink5 to-gray-100 blur-3xl"
                ></div>
                <img
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1671177124/Misc/PNG_25_yoa08y.png"
                  className="relative w-full"
                  alt="wath illustration"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="mt-8 font-content ">
              One full IVF cycle takes about three weeks but sometimes the
              procedure is split into parts, to manage certain challenges in the
              couples. This may delay the process. IVF can be done using the
              woman’s eggs and the male partner’s sperm or it may involve sperm,
              eggs or embryos from anonymous donors. Sometimes a gestational
              carrier (a woman who has an embryo implanted in her uterus) might
              be used. Such a carrier is called a surrogate mother and the
              process is called surrogacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
