import Image from 'next/image';
import type { Pose } from './types';

const PoseCard = ({ pose, accentColor }: { pose: Pose; accentColor: string }) => (
  <div className='group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800'>
    {/* image with name overlay */}
    <div className='relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-700'>
      <Image
        src={pose.image}
        alt={`${pose.sanskrit} — ${pose.english}`}
        fill
        sizes='(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw'
        className='object-cover transition-transform duration-500 group-hover:scale-110'
        loading='lazy'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent' />
      <div className='absolute inset-x-0 bottom-0 p-4'>
        <h3 className='font-heading text-lg font-bold leading-tight text-white drop-shadow-sm sm:text-xl'>
          {pose.sanskrit}
        </h3>
        <p className='font-content text-xs font-medium text-white/90 sm:text-sm'>{pose.english}</p>
      </div>
    </div>
    {/* colour stripe */}
    <div className='h-1.5 w-full' style={{ backgroundColor: accentColor }} />
    <div className='flex flex-1 flex-col p-4 sm:p-5'>
      <p className='mb-4 font-content text-xs leading-relaxed text-gray-600 dark:text-gray-300 sm:text-sm'>
        {pose.description}
      </p>

      <div className='mt-auto grid grid-cols-1 gap-3 sm:grid-cols-2'>
        {/* Indications */}
        <div className='rounded-lg bg-green-50 p-3 dark:bg-green-900'>
          <p className='mb-1.5 text-xs font-bold uppercase tracking-wide text-green-700 dark:text-green-300'>
            Indications
          </p>
          <ul className='space-y-1'>
            {pose.indications.map((item) => (
              <li
                key={item}
                className='flex items-start gap-1 text-xs text-green-800 dark:text-green-200'
              >
                <span className='mt-0.5 shrink-0 font-bold'>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contraindications */}
        <div className='rounded-lg bg-red-50 p-3 dark:bg-red-900'>
          <p className='mb-1.5 text-xs font-bold uppercase tracking-wide text-red-700 dark:text-red-300'>
            Caution
          </p>
          <ul className='space-y-1'>
            {pose.contraindications.map((item) => (
              <li
                key={item}
                className='flex items-start gap-1 text-xs text-red-800 dark:text-red-200'
              >
                <span className='mt-0.5 shrink-0 font-bold'>⚠</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default PoseCard;
