import { MdAlternateEmail, MdPhone } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="divide-y-2 divide-gray-200">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl font-heading">
              Get in touch
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2 font-content">
              {contactData?.getInTouch.map((items) => (
                <div key={items.id}>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {items.name}
                  </h3>
                  <div className="mt-2 text-base">
                    <div className="sr-only">Email</div>
                    <Link
                      href={`mailto:${items.email}`}
                      className="text-purple-800 hover:underline"
                    >
                      <div>
                        <MdAlternateEmail className="inline-flex" />{" "}
                        {items.email}
                      </div>
                    </Link>
                    <div className="mt-1">
                      <div className="sr-only">Phone number</div>
                      <Link
                        href={`tel:${items.phone}`}
                        className="text-brandPink2 hover:underline"
                      >
                        <div>
                          <MdPhone className="inline-block w-5 h-5" />{" "}
                          {items.phone}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 pt-16 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2 font-content">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl font-heading">
                Locations
              </h2>
              {contactData?.locations.map((items) => (
                <div key={items.id}>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {items.name}
                  </h3>
                  <div className="mt-2 text-base text-gray-500">
                    <div className="mt-1">
                      <Link
                        href={`tel:${items.phone}`}
                        className="text-brandPink2 hover:underline"
                      >
                        <div>
                          <MdPhone className="inline-block w-5 h-5" />{" "}
                          {items.phone}
                        </div>
                      </Link>
                    </div>
                    {items.address}
                    <Link
                      href={items.directionLink}
                      className="inline-flex items-center overflow-hidden w-auto max-w-[32px] h-8 hover:max-w-[340px] bg-brandPink text-white font-semibold rounded-3xl hover:bg-brandPink2 transition-all duration-500 ease-linear"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <span>
                        <SiGooglemaps className="ml-2 text-base flex items-center" />
                      </span>
                      <span className="pl-2 pr-4 whitespace-nowrap">
                        Direction
                      </span>
                    </Link>
                    <Link
                      href={`tel:${items.phone}`}
                      className="inline-flex ml-2 items-center overflow-hidden w-auto max-w-[32px] h-8 hover:max-w-sm bg-brandPink text-white font-semibold rounded-3xl hover:bg-brandPink2 transition-all duration-500 ease-linear"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <span>
                        <MdPhone className="ml-2 text-base flex items-center" />
                      </span>
                      <span className="pl-2 pr-4 whitespace-nowrap">
                        Phone Call
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

export const contactData = {
  getInTouch: [
    {
      id: 1,
      name: "Appointments & Queries",
      email: "dreams@garbhagudi.com",
      phone: "+91 9108 9108 32",
    },
    {
      id: 2,
      name: "Feedback & Complaints",
      email: "grievance@garbhagudi.com",
      phone: "+91 9108 9108 32",
    },
    {
      id: 3,
      name: "Human Resources",
      email: "hr@garbhagudi.com",
      phone: "+91 96060 02999",
    },
    {
      id: 4,
      name: "Partnership",
      email: "jayaram@garbhagudi.com",
      phone: "+91 96060 02999",
    },
  ],
  locations: [
    {
      id: "1",
      name: "Hanumanthanagar",
      address: (
        <div>
          <p>
            Subhasri Complex, 210/A, Kumaraswamy Temple Rd, 2nd Block, Phase 1,
            Banashankari Stage I, Banashankari,
          </p>
          <p className="mt-1 mb-5">Bengaluru, Karnataka 560050</p>
        </div>
      ),
      phone: "+91 98869 15556",
      directionLink: "https://g.page/GG1-HN?share",
    },
    {
      id: "2",
      name: "Kalyan Nagar",
      address: (
        <div>
          <p>
            Park Landing, 5AC-709, Outer Ring Rd, Balachandra Layout, HRBR
            Layout 2nd Block, Chelekare, Extension,
          </p>
          <p className="mt-1 mb-5">Bengaluru, Karnataka 560043</p>
        </div>
      ),
      phone: "+91 88614 33339",
      directionLink: "https://g.page/GarbhaGudi-IVF-Bangalore?share",
    },
    {
      id: "3",
      name: "Jayanagar",
      address: (
        <div>
          <p>
            #26, Pattalamma Temple Road, Behind South End Circle Metro Station,
            Basavanagudi, <br />
            Jayanagar
          </p>
          <p className="mt-1 mb-5">Bengaluru, Karnataka 560004</p>
        </div>
      ),
      phone: "+91 99724 63355",
      directionLink: "https://g.page/ggivf?share",
    },
    {
      id: "4",
      name: "Electronic City",
      address: (
        <div>
          <p>
            Ganesh Towers, 3rd Floor, 60/5 and 60/6, NH 44, Beside Andhra Bank,
            Konappana Agrahara, Electronic City,
          </p>
          <p className="mt-1 mb-5">Bengaluru, Karnataka 560100</p>
        </div>
      ),
      phone: "+91 88618 11116",
      directionLink: "https://g.page/GG4-EC?share",
    },
    {
      id: "5",
      name: "Marathahalli",
      address: (
        <div>
          <p>
            4TH floor, Chirag Towers, Born Babies Building, 24 & 64, Service Rd,
            next to कलामंदिर, <br />
            Marathahalli,
          </p>
          <p className="mt-1 mb-5">Bengaluru, Karnataka 560037</p>
        </div>
      ),
      phone: "+91 81051 81515",
      directionLink: "https://goo.gl/maps/kxhfM5SCZuq6EDnE9",
    },
    {
      id: "6",
      name: "New BEL Road",
      address: (
        <div>
          <p>
            #3, 1st Floor, New BEL Rd, opp. to Ramaiah Hospital, RMV 2nd Stage,
            Ashwath Nagar, Devasandra Layout, Sadashivnagar
          </p>
          <p className="mt-1 mb-5">Bengaluru, Karnataka 560094</p>
        </div>
      ),
      phone: "+91 9108 9108 25",
      directionLink: "https://goo.gl/maps/Fmiwn4ZCsSTxehnq9",
    },
    {
      id: "7",
      name: "Nagarbhavi",
      address: (
        <div>
          <p>
            1st Floor, 80ft Main Road, NGCF Layout, 2nd Stage, BDA Road,
            Naagarabhaavi,
          </p>
          <p className="mt-1 mb-5">Bengaluru, Karnataka 560072</p>
        </div>
      ),
      phone: "+91 9886 9886 65",
      directionLink: "https://goo.gl/maps/6ZCKzTrmE3UzgFuS7",
    },
  ],
};
