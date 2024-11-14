import image1 from '../../assets/fertility-quiz/Vecto (1).png';
import image2 from '../../assets/fertility-quiz/Vector (2).png';
import image3 from '../../assets/fertility-quiz/Vector (3).png';
import Image from 'next/image';
export default function Overview() {
  const renderData = [
    {
      icon: image1,
      title: 'Science of Preservation',
      content:
        'Eggs are safely retrieved, frozen, and stored, maintaining their quality and viability for when you’re ready.',
    },
    {
      icon: image2,
      title: 'Empowerment through Choice',
      content:
        'Egg freezing provides flexibility for women who are focusing on career, personal goals, or simply aren’t ready to have children yet.',
    },
    {
      icon: image3,
      title: 'Why Now?',
      content:
        'Advancements in cryopreservation and storage techniques mean that eggs can be preserved with high success rates.',
    },
  ];
  const statistic = [
    {
      value: '~90%',
      title: 'Egg Survival Rate',
      content: 'This has been observed in women under 35 years of age',
    },
    {
      value: '~95%',
      title: 'Eggs Retain-up',
      content: 'Frozen eggs retain-up using modern cryopreservation methods.',
    },
  ];

  return (
    <div className='pb-5 pt-10'>
      <div className='flex flex-col'>
        <div className='my-10 mr-10 pb-5 text-center text-4xl font-extrabold leading-8 text-[#1D1D1D] dark:text-white'>
          Overview
        </div>
        <div className='flex items-start gap-28 px-14 text-center'>
          {renderData.map((ele, index) => {
            return (
              <div
                key={index}
                className='relative flex items-center justify-between'
              >
                <div className='flex flex-col items-center justify-center'>
                  <div className='flex h-16 w-16 items-center justify-center rounded-[50%] bg-[#FFE9EC]'>
                    <Image
                      src={ele.icon}
                      alt={`image ${index + 1}`}
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className='py-2 font-figtree text-2xl font-semibold'>
                    {ele.title}
                  </div>
                  <div
                    className={`w-full font-nunito-Sans text-lg font-normal opacity-70 ${renderData.length == index + 1 && 'pr-6'}`}
                  >
                    {ele.content}
                  </div>
                </div>
                {/* <div
                  className={`w-2/3 rotate-90 border-[2px] border-[#FFE9EC] ${renderData.length == index + 1 && 'hidden'}`}
                ></div> */}

                <div
                  className={`${renderData.length == index + 1 ? 'hidden' : 'absolute bottom-[55%] left-[110%] w-[6em] rotate-90 border-2 border-l-4 border-[#FFE9EC]'}`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex flex-col items-center justify-center py-10'>
        <div className='py-10 text-3xl font-extrabold text-[#1D1D1D]'>
          Statistic & Findings
        </div>
        <div className='flex items-center justify-center gap-20'>
          {statistic.map((ele, index) => (
            <div
              key={index}
              className='flex h-32 w-72 flex-col items-center justify-center bg-[#F9F9F9] px-5 py-16'
            >
              <div className='text-4xl font-extrabold text-[#D9576C]'>
                {ele.value}
              </div>
              <div className='text-lg font-bold text-black'>{ele.title}</div>
              <div className='py-1 text-center text-[14px] font-normal text-[#1D1D1D]'>
                {ele.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
