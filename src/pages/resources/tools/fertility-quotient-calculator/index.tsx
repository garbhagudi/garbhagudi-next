import { useState, useCallback, useMemo } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamically import components with SSR disabled
const Poor = dynamic(() => import('sections/tools/fqc/results').then((mod) => mod.Poor), {
  ssr: false,
});
const Low = dynamic(() => import('sections/tools/fqc/results').then((mod) => mod.Low), {
  ssr: false,
});
const Average = dynamic(() => import('sections/tools/fqc/results').then((mod) => mod.Average), {
  ssr: false,
});
const Good = dynamic(() => import('sections/tools/fqc/results').then((mod) => mod.Good), {
  ssr: false,
});
const Best = dynamic(() => import('sections/tools/fqc/results').then((mod) => mod.Best), {
  ssr: false,
});
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });

// Define types for input mapping and results
interface FertilityMappings {
  values: number[];
  age: number[];
  bmi: number[];
  afc: number[];
  amh10: number[];
}

type FertilityCategory = 'poor' | 'low' | 'average' | 'good' | 'best' | 'overflow';

const IndexPage: React.FC = () => {
  const mappings: FertilityMappings = useMemo(
    () => ({
      values: Array.from({ length: 100 }, (_, i) => i + 1),
      age: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 3,
        3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
      bmi: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 1,
        1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
      afc: [
        1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2,
        2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
      amh10: [
        0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
    }),
    []
  );

  const [formData, setFormData] = useState({
    age: '',
    bmi: '',
    afc: '',
    amh: '',
  });
  const [result, setResult] = useState<{
    score: number;
    percent: number;
    category: FertilityCategory;
  } | null>(null);
  const [error, setError] = useState('');

  const mapInput = useCallback(
    (input: number, mappingArray: number[], multiplier: number = 1): number => {
      const index = mappings.values.findIndex((value) => value >= input);
      return mappingArray[index] * multiplier;
    },
    [mappings]
  );

  const calculate = useCallback(() => {
    // Input validation
    const { age, bmi, afc, amh } = formData;
    if (!age || !bmi || !afc || !amh) {
      setError('Error! : Please check your inputs...');
      return;
    }

    const ageValue = Number(age);
    const bmiValue = Number(bmi);
    const afcValue = Number(afc);
    const amhValue = Number(amh) * 10;

    const ageScore = mapInput(ageValue, mappings.age, 3);
    const bmiScore = mapInput(bmiValue, mappings.bmi);
    const afcScore = mapInput(afcValue, mappings.afc, 3);
    const amhScore = mapInput(amhValue, mappings.amh10, 3);

    const score = ageScore + bmiScore + afcScore + amhScore;
    const percent = score * 2;

    let category: FertilityCategory;
    if (score <= 18) category = 'poor';
    else if (score <= 27) category = 'low';
    else if (score <= 34) category = 'average';
    else if (score <= 42) category = 'good';
    else if (score <= 50) category = 'best';
    else category = 'overflow';

    setResult({ score, percent, category });
    setError('');
  }, [formData, mapInput]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const resetForm = useCallback(() => {
    setFormData({ age: '', bmi: '', afc: '', amh: '' });
    setResult(null);
    setError('');
  }, []);

  const renderResultComponent = () => {
    if (!result) return null;

    const componentMap = {
      poor: Poor,
      low: Low,
      average: Average,
      good: Good,
      best: Best,
    };

    const ResultComponent = componentMap[result.category];
    return ResultComponent ? <ResultComponent /> : null;
  };

  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Fertility Quotient Calculator | GarbhaGudi</title>
        <meta name='title' content='Fertility Quotient Calculator | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='Use our Ovulation and Pregnancy Due Date Calculator to track your fertile window & estimate your due date. Plan your pregnancy journey with ease!'
        />
        {/* Open Graph / Facebook */}
        <meta
          property='og:title'
          content='Fertility Quotient Calculator  | GarbhaGudi IVF Centre'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='Use our Ovulation and Pregnancy Due Date Calculator to track your fertile window & estimate your due date. Plan your pregnancy journey with ease!'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1654690156/SEO/5-min_xsyat3.webp'
        />
        {/* Twitter*/}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='Fertility Quotient Calculator | GarbhaGudi IVF Centre'
        />
        <meta
          name='twitter:description'
          content='Use our Ovulation and Pregnancy Due Date Calculator to track your fertile window & estimate your due date. Plan your pregnancy journey with ease!'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1654690156/SEO/5-min_xsyat3.webp'
        />
      </Head>
      <div className='mx-auto max-w-7xl font-content'>
        <h1 className='py-8 text-center font-heading text-4xl font-semibold text-gray-800 dark:text-gray-200'>
          Fertility Quotient Calculator
        </h1>
        <div
          className='mx-auto flex max-w-6xl flex-col items-center justify-start px-3 text-sm text-gray-800 dark:text-gray-200 sm:px-0 sm:text-base'
          id='intro'
        >
          <p className='mt-2'>
            Fertility quotient is an indicator of an individual’s capability to reproduce. The
            subjective topic of fertility reserve is being converted to an objective score. It is
            ascore against 100, given against inputs provided by the user. The score is then
            converted to an indicative value to help the person understand the status of his/her
            fertility levels.
          </p>
          <p className='mt-2'>
            There have many research articles that address this topic of fertility capability. All
            research articles are more or less unanimous in their findings that a lady’s fertility
            is based on several factors which include her age, her Antral Follicular Count (AFC),
            her AMH hormone levels and her general health condition. There are also other fringe
            factors that contribute to the fertility aspect – like tobacco usage, addiction to
            alcohol or other drugs etc.
          </p>
        </div>
        <div className='py-6'>
          {!result ? (
            <div className='mx-auto max-w-lg space-y-3'>
              {/* Input fields */}
              {Object.entries({
                age: { label: 'Age', optimal: '18 - 25' },
                bmi: { label: 'Body Mass Index (BMI)', optimal: '19 - 21' },
                afc: { label: 'Antral Follicle Count (AFC)', optimal: '12 - 16' },
                amh: { label: 'Anti-Müllerian Hormone (AMH) level', optimal: '2.1 - 3.9' },
              }).map(([key, { label, optimal }]) => (
                <div key={key} className='px-3 sm:px-0'>
                  <label
                    htmlFor={key}
                    className='block text-sm font-medium text-gray-800 dark:text-gray-200'
                  >
                    {label}
                  </label>
                  <input
                    type='text'
                    id={key}
                    value={formData[key as keyof typeof formData]}
                    onChange={handleInputChange}
                    className='block h-9 w-full rounded-md border-2 border-brandPurpleDark pl-3 shadow-2xl transition-all duration-300 ease-linear focus:border-gg-500 focus:outline-none'
                    placeholder={label}
                  />
                  <p className='mt-2 text-xs text-gray-400'>Optimum Value: {optimal}</p>
                </div>
              ))}

              <div className='mx-auto text-center'>
                <button
                  onClick={calculate}
                  className='mt-5 rounded-lg border-2 border-brandPink px-8 py-2'
                >
                  Calculate
                </button>
                {error && <div className='mt-2 text-red-500'>{error}</div>}
              </div>
            </div>
          ) : (
            <div className='mx-auto max-w-xl px-3'>
              <div className='mt-2 flex flex-row'>
                <div className='mx-auto w-32 rounded-lg border-2 px-3 py-1 text-center'>
                  <div>Score</div>
                  <div className='text-xl font-bold'>{result.score}/50</div>
                </div>
                <div className='mx-auto w-32 rounded-lg border-2 px-3 py-1 text-center'>
                  <div>Percent</div>
                  <div className='text-xl font-bold'>{result.percent}%</div>
                </div>
              </div>

              <div className='mt-10'>{renderResultComponent()}</div>

              <div className='mt-5 text-center'>
                <button
                  onClick={resetForm}
                  className='rounded-lg border-2 border-brandPink px-8 py-2'
                >
                  Refresh
                </button>
              </div>
            </div>
          )}
        </div>
        <div className='mb-5 px-3 text-xs'>
          <p>
            The score is calculated based on the woman’s fertility factors - AMH, AFC, Age and BMI.
            Some of these factors play a role more critical than the others. So, proper adjustments
            have been done in the algorithm to manage these variations.{' '}
          </p>
          <p className='mt-2'>
            Please note that the fertility quotient is an indicator of the fertility status. It is
            not a definitive advice from the doctor. Consult a fertility specialist to know more
            about your fertility quotient and fertility status. It is also important to note that a
            woman may move from one stage to another rather quickly based on the parameters that
            play a role. For example, a lady with a fertility quotient of “Best Fertility” may move
            to “Good Fertility” within the matter of a few months if her age is beyond 30 and if her
            AMH or AFC starts dropping quickly.
          </p>
        </div>
      </div>
      <Cta />
    </div>
  );
};

export default IndexPage;
