import { HiChatAlt, HiPhone, HiCalendar } from "react-icons/hi";

const supportLinks = [
  {
    name: "Chat Support",
    href: "#",
    description:
      "Chat online with our team now from anywhere. We provide you with a seamless and hassle-free online chat experience from the comfort of your home. Get the proper assistance now!",
    icon: HiChatAlt,
  },
  {
    name: "Call Support",
    href: "#",
    description:
      "Reach out to us with your questions, concerns, or challenges. We’ll be happy to help you at any time, and we’re always trying to make things easier for you!",
    icon: HiPhone,
  },
  {
    name: "Book an Appointment",
    href: "#",
    description:
      "Now book an appointment with any of your nearest locations of GarbhaGudi IVF Centre, and get the best fertility treatments from our experts!",
    icon: HiCalendar,
  },
];

const Hero = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643459251/Banner/GG_Care_vgti5c.webp"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-xl font-extrabold tracking-normal text-white md:text-3xl lg:text-5xl font-heading">
            GG CARE | Committed to Couple Delight
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300 font-content">
            Reach out with your questions, concerns and challenges. Or just to
            say hi. We{`'`}re always standing by and eager to help.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col bg-white rounded-2xl shadow-xl"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-brandPink3 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900 font-heading">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500 font-content">
                  {link.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
