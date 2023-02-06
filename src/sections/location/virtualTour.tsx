import React from "react";

const VirtualTour = ({ link1, link2, link3 }) => {
  return (
    <div className="max-w-7xl mx-auto">
      {link1 && (
        <h3 className="text-center text-2xl md:text-4xl font-heading py-3 font-bold mx-auto">
          Virtual Tour
        </h3>
      )}
      <ul className="mx-auto grid grid-cols-1 sm:gap-x-0 py-8 px-2 lg:grid-cols-3 max-w-7xl">
        {link1 && (
          <li>
            <div className="space-y-4">
              <div className="bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 relative h-[24rem] mx-auto mt-4">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  loading="lazy"
                  title="map"
                  src={link1}
                ></iframe>
              </div>
            </div>
          </li>
        )}
        {link2 && (
          <li>
            <div className="space-y-4">
              <div className="bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 relative h-[24rem] mx-auto mt-4">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  loading="lazy"
                  title="map"
                  src={link2}
                ></iframe>
              </div>
            </div>
          </li>
        )}
        {link3 && (
          <li>
            <div className="space-y-4">
              <div className="bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 relative h-[24rem] mx-auto mt-4">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  loading="lazy"
                  title="map"
                  src={link3}
                ></iframe>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default VirtualTour;
