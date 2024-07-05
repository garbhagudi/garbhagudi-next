import { useState, useEffect } from 'react';
import Image from 'next/image';
import offerBanner from 'assets/landing-page/Offer-Logo.png';

const PopupImage = () => {
  const phoneNumber = "+919071234006"; // Replace with your desired phone number
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the pop-up after a certain delay (e.g., 5 seconds)
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // Adjust delay as needed

    // Clean up timer on component unmount or state change
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    // Redirect to the dialer with the specific number
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  // If showPopup is false, render nothing
  if (!showPopup) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="rounded-lg p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black focus:outline-none"
          onClick={handleClose}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex items-center justify-center">
          <Image
            src={offerBanner} // Update with the actual path to your image
            alt="Call Now"
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
            className="rounded-lg"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default PopupImage;
