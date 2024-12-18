import image1 from '../../assets/fertility-quiz/Vecto (1).png';
import image2 from '../../assets/fertility-quiz/Vector (2).png';
import image3 from '../../assets/fertility-quiz/Vector (3).png';
import Image from 'next/image';
export default function Overview() {
  const renderData = [
    {
      icon: image1,
      title: 'Science of Preservation',
      content: 'Egg Freezing Technology has improved drastically in the past decade',
    },
    {
      icon: image2,
      title: 'Empowerment through Choice',
      content: 'Freezing Eggs will not affect having a healthy pregnancy',
    },
    {
      icon: image3,
      title: 'Why Now?',
      content:
        'If you freeze your eggs before the age of 35, there are 90% chances of achieving a successful pregnancy',
    },
  ];
  const statistic = [
    {
      value: '~90%',
      title: 'Egg Survival Rate',
      content:
        'The success rate for egg freezing in women under 35 years of age is between 75% & 99%.',
    },
    {
      value: '~95%',
      title: 'Eggs Retain-up',
      content:
        'Females who froze 15 eggs before 35 years old attempted a 70 – 80 % opportunity of having a live birth. 20 additional frozen eggs will scale their chance up to 90%. Egg Freezing or oocyte cryopreservation, is a method for women to preserve fertility by freezing eggs.',
    },
  ];

  return (
    <div className='pb-5 md:pt-4'>
      <div className='flex flex-col'>
        <div className='my-6 pb-5 text-center text-2xl font-extrabold leading-8 text-gray-800 dark:text-white md:my-10 md:text-4xl'>
          Did You Know?
        </div>
        <div className='flex flex-col items-start gap-2 px-14 text-center md:flex-row md:gap-28'>
          {renderData.map((ele, index) => {
            return (
              <div
                key={index}
                className='relative flex flex-col items-center justify-between md:flex-row lg:w-1/3'
              >
                <div className='flex flex-col items-center justify-center'>
                  <div className='flex h-16 w-16 items-center justify-center rounded-[50%] bg-[#FFE9EC]'>
                    <Image src={ele.icon} alt={`image ${index + 1}`} width={32} height={32} />
                  </div>
                  <div
                    className={`w-full py-5 font-nunito-Sans text-sm font-normal opacity-70 md:text-lg ${renderData.length == index + 1 && 'pr-6'}`}
                  >
                    {ele.content}
                  </div>
                </div>

                <div
                  className={`${renderData.length == index + 1 ? 'hidden' : 'left-[110%] top-10 my-10 w-[6em] border-2 border-l-4 border-[#FFE9EC] md:absolute md:bottom-[55%] md:rotate-90 md:py-0'}`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex flex-col items-center justify-center py-2'>
        <div className='my-5 pb-5 text-center text-2xl font-extrabold leading-8 text-gray-800 dark:text-white md:my-10 md:text-4xl'>
          Statistics
        </div>
        <div className='flex flex-col items-center justify-center gap-6 px-5 lg:flex-row lg:gap-20 lg:px-0'>
          {statistic.map((ele, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center bg-[#F9F9F9] px-5 py-16 lg:h-56 lg:w-96'
            >
              <div className='text-center text-[14px] font-normal opacity-70 md:text-[18px] lg:py-10'>
                {ele.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
