import NutritionSection from './NutritionSection';
import { VITAMINS, MINERALS, FOOD_GROUPS } from './data';

const NutritionGuide = () => (
  <>
    <div className='mb-6 flex items-center gap-3'>
      <div className='h-8 w-1 rounded-full bg-amber-500 sm:h-10 sm:w-1.5' />
      <div>
        <h2 className='font-heading text-xl font-bold text-gray-900 dark:text-white sm:text-2xl lg:text-3xl'>
          Nutrition Guide
        </h2>
        <span className='mt-1 inline-block rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-800 sm:px-3'>
          Food as Medicine
        </span>
      </div>
    </div>

    <div className='space-y-10'>
      <NutritionSection title='Vitamins' firstColLabel='Vitamin' rows={VITAMINS} />
      <NutritionSection title='Minerals' firstColLabel='Mineral' rows={MINERALS} />
      <NutritionSection title='Food Groups' firstColLabel='Food Type' rows={FOOD_GROUPS} />
    </div>

    <div className='mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-700 dark:bg-amber-900 dark:text-amber-200'>
      <strong>Disclaimer:</strong> This nutritional information is for general wellness education
      only. It is not a substitute for personalised advice from a qualified healthcare professional.
    </div>
  </>
);

export default NutritionGuide;
