import Image from 'next/image';
import Link from 'next/link';

const ParagraphSection = () => {
  return (
    <div>
      <h2 className='text-xl font-bold'>Holistic approach to fertility</h2>
      <p className='text-gray-800 dark:text-gray-200'>
        At{' '}
        <Link href='/' className='text-gg-500 underline'>
          GarbhaGudi IVF Centre
        </Link>
        , we integrate the tri-fold path of yoga, nutrition, and Ayurveda with advanced medical
        treatments to enhance fertility. This unique approach not only supports your physical health
        but also nurtures your mental and emotional well-being, creating an optimal environment for
        conception.
      </p>
      <ul className='list-disc space-y-2 pl-5 text-gray-800 dark:text-gray-200'>
        {principles.map((item, index) => (
          <li key={index} className='leading-relaxed'>
            {item.para}
          </li>
        ))}
      </ul>
      <p className='text-gray-800 dark:text-gray-200'>
        Holistic medicine is meant to complement, not replace, traditional medical care.
      </p>
      <h2 className='mt-5 text-xl font-bold'>Engage and Learn with us:</h2>
      <p className='text-gray-800 dark:text-gray-200'>
        Join us in celebrating International IVF Day by participating in our various events and
        activities. Our event calendar from July 1 to July 25 is packed with opportunities for you
        to learn and engage. Whether you are an existing patient or new to our services, there's
        something for everyone. We also have special events happening at our branches across 9
        locations, ensuring you can be part of the celebration no matter where you are
      </p>
      <h2 className='mt-5 text-xl font-bold'>Join the 21-Day Yoga Challenge</h2>
      <p className='text-gray-800 dark:text-gray-200'>
        As part of our campaign, we invite you to take part in our 21-day yoga challenge. This
        program is designed to improve reproductive health through specially curated yoga practices.
        By participating, you'll not only enhance your fertility but also become part of a
        supportive community committed to holistic well-being.
      </p>
      <div className='mt-2 flex items-center justify-center rounded-lg'>
        <Image
          height={350}
          width={350}
          className='mb-5 mt-10 rounded-lg'
          src={
            'https://res.cloudinary.com/garbhagudiivf/image/upload/v1742984797/Yoga/21-Days-Yoga-Challenge-Logo_fup9qy.webp'
          }
          alt='Holistic approach to fertility - Section Image'
          loading='lazy'
        />
      </div>
    </div>
  );
};

export default ParagraphSection;

const principles = [
  {
    para: 'Holistic medicine is a form of healing that considers the whole person – body, mind, soul, and emotions – in the quest for optimal health and wellness. According to the holistic medicine philosophy, you can achieve the best possible health by gaining proper balance in life.',
  },
  {
    para: "Holistic medicine practitioners believe that the whole person is made up of parts that depend on one another, and if one part isn't working properly, all the other parts will be affected. So, if you have imbalances (physical, emotional, or spiritual) in your life, it can harm your overall health.",
  },
  {
    para: 'A holistic doctor may use all forms of health care, from conventional medication to alternative therapies, to treat you. ',
  },
  {
    para: 'Holistic healing therapy is based on principles that guide its approach to promoting health and wellness. These principles aim to create a balanced and harmonious state of well-being and acknowledges that true health and wellness are achieved when the mind, body, and soul are in harmony - Physical, Mental, Emotional, Social, Environmental, and Spiritual.',
  },
];
