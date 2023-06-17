import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import Head from 'next/head';

// List of available zipcodes
const availableZipcodes = [
  '560050',
  '560043',
  '560004',
  '560100',
  '560037',
  '560094',
  '560072',
];

interface Props {}

interface Coordinates {
  latitude: number;
  longitude: number;
}

const NearestZipcodeFinder: React.FC<Props> = () => {
  const [inputZipcode, setInputZipcode] = useState('');
  const [nearestZipcode, setNearestZipcode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Validate input to allow only 6-digit numbers
    if (inputValue.length <= 6 && /^\d*$/.test(inputValue)) {
      setInputZipcode(inputValue);
    }
  };

  const handleFindNearest = async () => {
    setLoading(true);
    const inputCoords = await getCoordinates(inputZipcode);

    if (inputCoords) {
      const nearest = await getNearestZipcode(inputCoords);
      setNearestZipcode(nearest);
    }
    setLoading(false);
  };

  const getNearestZipcode = async (inputCoords: Coordinates) => {
    let nearestZipcode = '';
    let minDistance = Infinity;

    for (const zipcode of availableZipcodes) {
      const coords = getCoordinates(zipcode);
      if (!coords) continue;

      const distance = calculateDistance(inputCoords, await coords);

      if (distance < minDistance) {
        minDistance = distance;
        nearestZipcode = zipcode;
      }
    }

    return nearestZipcode;
  };

  const getCoordinates = async (
    zipcode: string,
  ): Promise<Coordinates | null> => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${zipcode}`,
      );
      const data = await response.json();

      if (data && data.length > 0) {
        return {
          latitude: parseFloat(data[0].lat),
          longitude: parseFloat(data[0].lon),
        };
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }

    return null;
  };

  const calculateDistance = (coords1: Coordinates, coords2: Coordinates) => {
    const { latitude: lat1, longitude: lon1 } = coords1;
    const { latitude: lat2, longitude: lon2 } = coords2;

    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance;
  };

  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };

  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Search branch by pincode | GarbhaGudi IVF Centre</title>
        <meta
          name='title'
          content='Search branch by pincode | GarbhaGudi IVF Centre'
        />
        <meta
          name='description'
          content='To book an appointment for your Fertility and IVF treatment in GarbhaGudi, you can contact on 9108910832 or you can also Email us on dreams@garbhagudi.com.'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='Search branch by pincode | GarbhaGudi IVF Centre'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content="Reach out with your questions, concerns and challenges. Or just to say hi. We're always standing by and eager to help."
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_GGCare_qclgw8.jpg'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='Search branch by pincode | GarbhaGudi IVF Centre'
        />
        <meta
          name='twitter:description'
          content="Reach out with your questions, concerns and challenges. Or just to say hi. We're always standing by and eager to help."
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_GGCare_qclgw8.jpg'
        />
      </Head>

      <div className='flex items-center justify-center flex-col mt-10'>
        <h1 className='py-6 lg:pt-12 pb-6 font-heading text-3xl lg:text-4xl font-semibold px-2 text-center'>
          Find Your Nearest GarbhaGudi Branch
        </h1>
        <p className='pb-6 font-content px-3'>
          Enter your Zipcode / Pincode to find your nearest GarbhaGudi Branch
        </p>
        <input
          type='text'
          placeholder='Enter you Zip Code'
          value={inputZipcode}
          onChange={handleInputChange}
          className='border-2 border-brandPurpleDark rounded-lg px-3 py-2 text-center text-brandPink focus:border-brandPink focus:outline-none text-lg font-content font-semibold'
        />
        <button
          onClick={handleFindNearest}
          disabled={loading}
          className='font-content text-center mx-auto mt-4 px-3 py-2 border-brandPink3 border-2 rounded-lg hover:bg-brandPink3 hover:text-white font-semibold w-48 h-11'
        >
          {loading ? (
            <FaSpinner className='text-center mx-auto animate-spin' />
          ) : (
            'Find Nearest Branch'
          )}
        </button>
        <div className='py-6 md:py-12'>
          {locations.map(
            (items) =>
              nearestZipcode &&
              nearestZipcode === items.zipCode && (
                <div
                  key={items.id}
                  className='flex flex-col md:flex-row max-w-5xl bg-gray-200 p-3 rounded-lg'
                >
                  <div className=' px-3 md:px-0 w-full md:w-6/12 '>
                    <img
                      src={items.image}
                      alt={items.name}
                      className='rounded-lg'
                    />
                  </div>
                  <div className='ml-5 flex items-center md:items-start justify-center space-y-3 flex-col'>
                    <div className='text-2xl font-heading mt-4 md:mt-0'>
                      GarbhaGudi IVF Centre, {items.name}
                    </div>
                    <div className='font-content md:text-left text-lg text-center'>
                      {items.address}
                    </div>
                    <div className='flex items-center justify-center'>
                      <a
                        href={`tel:${items.phone}`}
                        className='bg-brandPink text-center w-32 mr-5 px-3 py-2 rounded-lg font-content text-white font-semibold'
                      >
                        Call Now
                      </a>

                      <a
                        href={items.directionLink}
                        className='bg-brandPink text-center w-44 px-3 py-2 rounded-lg font-content text-white font-semibold'
                      >
                        Maps / Directions
                      </a>
                    </div>
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default NearestZipcodeFinder;

const locations = [
  {
    id: '1',
    name: 'Hanumanthanagar',
    image: 'https://media.graphassets.com/pzLEWknQ9GG46x1mErBM',
    zipCode: '560050',
    address: (
      <div>
        <p>
          Subhasri Complex, 210/A, Kumaraswamy Temple Rd, 2nd Block, Phase 1,
          Banashankari Stage I, Banashankari,
        </p>
        <p className='mt-1 mb-5'>Bengaluru, Karnataka 560050</p>
      </div>
    ),
    phone: '+91 98869 15556',
    directionLink: 'https://g.page/GG1-HN?share',
  },
  {
    id: '2',
    name: 'Kalyan Nagar',
    image: 'https://media.graphassets.com/jP2NLCi0TQyEZcZYgmtK',
    zipCode: '560043',
    address: (
      <div>
        <p>
          Park Landing, 5AC-709, Outer Ring Rd, Balachandra Layout, HRBR Layout
          2nd Block, Chelekare, Extension,
        </p>
        <p className='mt-1 mb-5'>Bengaluru, Karnataka 560043</p>
      </div>
    ),
    phone: '+91 88614 33339',
    directionLink: 'https://g.page/GarbhaGudi-IVF-Bangalore?share',
  },
  {
    id: '3',
    name: 'Jayanagar',
    image: 'https://media.graphassets.com/3gyLPQfGQcqlK1OegwGz',
    zipCode: '560004',
    address: (
      <div>
        <p>
          #26, Pattalamma Temple Road, Behind South End Circle Metro Station,
          Basavanagudi, <br />
          Jayanagar
        </p>
        <p className='mt-1 mb-5'>Bengaluru, Karnataka 560004</p>
      </div>
    ),
    phone: '+91 99724 63355',
    directionLink: 'https://g.page/ggivf?share',
  },
  {
    id: '4',
    name: 'Electronic City',
    image: 'https://media.graphassets.com/gQZguDjlSHWnPqkwmtCx',
    zipCode: '560100',
    address: (
      <div>
        <p>
          Ganesh Towers, 3rd Floor, 60/5 and 60/6, NH 44, Beside Andhra Bank,
          Konappana Agrahara, Electronic City,
        </p>
        <p className='mt-1 mb-5'>Bengaluru, Karnataka 560100</p>
      </div>
    ),
    phone: '+91 88618 11116',
    directionLink: 'https://g.page/GG4-EC?share',
  },
  {
    id: '5',
    name: 'Marathahalli',
    image: 'https://media.graphassets.com/GqmL79ASSZeiU6wyL4cQ',
    zipCode: '560037',
    address: (
      <div>
        <p>
          4TH floor, Chirag Towers, Born Babies Building, 24 & 64, Service Rd,
          next to कलामंदिर, <br />
          Marathahalli,
        </p>
        <p className='mt-1 mb-5'>Bengaluru, Karnataka 560037</p>
      </div>
    ),
    phone: '+91 81051 81515',
    directionLink: 'https://goo.gl/maps/kxhfM5SCZuq6EDnE9',
  },
  {
    id: '6',
    name: 'New BEL Road',
    image: 'https://media.graphassets.com/pZ8Jm4ZLTv2HWLUycBvH',
    zipCode: '560094',
    address: (
      <div>
        <p>
          #3, 1st Floor, New BEL Rd, opp. to Ramaiah Hospital, RMV 2nd Stage,
          Ashwath Nagar, Devasandra Layout, Sadashivnagar
        </p>
        <p className='mt-1 mb-5'>Bengaluru, Karnataka 560094</p>
      </div>
    ),
    phone: '+91 9108 9108 25',
    directionLink: 'https://goo.gl/maps/Fmiwn4ZCsSTxehnq9',
  },
  {
    id: '7',
    name: 'Nagarbhavi',
    image: 'https://media.graphassets.com/UK6hOwG1Q02lMszniXIE',
    zipCode: '560072',
    address: (
      <div>
        <p>
          1st Floor, 80ft Main Road, NGCF Layout, 2nd Stage, BDA Road,
          Naagarabhaavi,
        </p>
        <p className='mt-1 mb-5'>Bengaluru, Karnataka 560072</p>
      </div>
    ),
    phone: '+91 9886 9886 65',
    directionLink: 'https://goo.gl/maps/6ZCKzTrmE3UzgFuS7',
  },
];
