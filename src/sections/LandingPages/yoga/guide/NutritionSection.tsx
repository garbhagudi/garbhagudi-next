import type { NutritionRow } from './types';

type NutritionSectionProps = {
  title: string;
  firstColLabel: string;
  rows: NutritionRow[];
};

const NutritionSection = ({ title, firstColLabel, rows }: NutritionSectionProps) => (
  <div>
    <h3 className='font-heading mb-4 text-lg font-bold text-gray-900 dark:text-white sm:text-xl'>
      {title}
    </h3>

    {/* Desktop table */}
    <div className='hidden overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 sm:block'>
      <div className='overflow-x-auto'>
        <table className='font-content min-w-full divide-y divide-gray-200 text-sm dark:divide-gray-700'>
          <thead>
            <tr className='bg-gray-50 dark:bg-gray-800'>
              {[firstColLabel, 'Food Sources', 'Benefits', 'Indications', 'Cautions'].map((col) => (
                <th
                  key={col}
                  className='px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400'
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-100 bg-white dark:divide-gray-700 dark:bg-gray-900'>
            {rows.map((row) => (
              <tr key={row.name} className='hover:bg-gray-50 dark:hover:bg-gray-800'>
                <td className='px-4 py-3 font-semibold text-gray-900 dark:text-white'>{row.name}</td>
                <td className='px-4 py-3 text-gray-600 dark:text-gray-300'>{row.sources}</td>
                <td className='px-4 py-3 text-gray-600 dark:text-gray-300'>{row.benefits}</td>
                <td className='px-4 py-3 text-green-700 dark:text-green-400'>{row.indications}</td>
                <td className='px-4 py-3 text-red-600 dark:text-red-400'>{row.contraindications}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Mobile cards */}
    <div className='space-y-3 sm:hidden'>
      {rows.map((row) => (
        <div
          key={row.name}
          className='rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800'
        >
          <p className='font-heading mb-3 text-sm font-bold text-gray-900 dark:text-white'>
            {row.name}
          </p>
          <div className='space-y-2'>
            <div>
              <p className='text-xs font-semibold uppercase tracking-wide text-gray-400'>Sources</p>
              <p className='font-content text-xs text-gray-700 dark:text-gray-300'>{row.sources}</p>
            </div>
            <div>
              <p className='text-xs font-semibold uppercase tracking-wide text-gray-400'>Benefits</p>
              <p className='font-content text-xs text-gray-700 dark:text-gray-300'>{row.benefits}</p>
            </div>
            <div>
              <p className='text-xs font-semibold uppercase tracking-wide text-green-600'>Indications</p>
              <p className='font-content text-xs text-green-700 dark:text-green-400'>{row.indications}</p>
            </div>
            <div>
              <p className='text-xs font-semibold uppercase tracking-wide text-red-500'>Cautions</p>
              <p className='font-content text-xs text-red-600 dark:text-red-400'>{row.contraindications}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default NutritionSection;
