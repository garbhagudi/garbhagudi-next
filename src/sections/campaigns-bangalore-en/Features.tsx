import {
  LuBuilding2,
  LuIndianRupee,
  LuLeaf,
  LuPercent,
  LuStethoscope,
  LuTestTubeDiagonal,
} from 'react-icons/lu';

/* dash-ivf-next imports these from lucide-react; react-icons' `lu` set is the
 * same Lucide artwork (TestTube2 was renamed TestTubeDiagonal upstream). */
const features = [
  {
    id: 1,
    name: 'High Success Rate',
    Icon: LuPercent,
    content: 'GarbhaGudi has one of the highest IVF treatments success rates in the industry.',
  },
  {
    id: 2,
    name: 'World Class Fertility Care',
    Icon: LuBuilding2,
    content:
      'GarbhaGudi is Proud to have played a key role in bringing more than 15,000+ babies into the world since 2011.',
  },
  {
    id: 3,
    name: 'Top Fertility Specialists',
    Icon: LuStethoscope,
    content:
      'Team of fertility specialists like gynecologists, embryologists, technicians and staff to help you conceive.',
  },
  {
    id: 4,
    name: 'Affordable Treatments',
    Icon: LuIndianRupee,
    content:
      'GarbhaGudi offers Affordable Infertility treatment without any compromise on service or quality of medicines or services',
  },
  {
    id: 7,
    name: 'Holistic Approach',
    Icon: LuLeaf,
    content:
      'At GarbhaGudi we are committed to Treating infertility through the holistic mind-body-soul programs.',
  },
  {
    id: 9,
    name: 'Best in Class Facilities',
    Icon: LuTestTubeDiagonal,
    content:
      'Our IVF Centers in Bangalore are equipped to handle the most challenging cases with state of art technology at our disposal',
  },
];

export default function Features() {
  return (
    <div className='sm:py-18 relative bg-white py-8' id='features'>
      <div className='mx-auto max-w-md sm:max-w-3xl lg:max-w-7xl'>
        <h2 className='mt-2 text-center text-2xl font-bold text-[#363636] sm:text-3xl'>
          Our Versatile Approach
        </h2>

        <div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {features.map(({ id, name, Icon, content }) => (
            <div className='group mx-auto max-w-sm pt-3' key={id}>
              <div className='h-full overflow-hidden rounded-lg transition-all hover:scale-105'>
                <div className='grid h-full grid-cols-6'>
                  <div className='col-span-1 flex items-center justify-center bg-brandPink'>
                    <div className='p-3 text-4xl text-white'>
                      <Icon size={32} />
                    </div>
                  </div>
                  <div className='col-span-5 border-2 border-brandPink px-2 py-4'>
                    <h3 className='mt-1 text-lg font-semibold'>{name}</h3>
                    <p className='mt-2 pb-3 text-sm leading-relaxed text-gray-600'>{content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
