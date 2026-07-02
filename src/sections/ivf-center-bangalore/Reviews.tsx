import { FcGoogle } from 'react-icons/fc';
import { HiStar } from 'react-icons/hi';

/* Google reviews + average rating for the IVF-Centre landing page.
 *
 * The 4.8 average and the quotes below are the same Google-review content
 * already published elsewhere on the site (Neutral banner rating claim +
 * Performant testimonials) — kept static here so the LP stays fast. */

const AVERAGE_RATING = 4.8;

const reviews = [
  {
    id: 1,
    name: 'Anjali Shivarkar',
    review:
      'GarbhaGudi is a hope to any couple. They provide the best service. Doctors are very well-experienced and truly amazing in their work. Very well-maintained center. Staffs are well trained and they are very supportive throughout the treatment journey with constant follow-up calls. highly recommended.',
  },
  {
    id: 2,
    name: 'Anjali Khadtare',
    review:
      'The service at garbhagudi IVF Centre was very good. All staffs and Doctor were ready to assist at anytime. We are very pleased and thankful for the help, assistance and support provided by the Doctor and their staff. Wonderful efforts of them resulted in us for a joyful and successful life. Thanks to all.',
  },
  {
    id: 3,
    name: 'Prathap Kumar',
    review:
      'I would really recommend GarbhaGudi IVF for people who want to have a baby. It was really an amazing experience having babies. Yes, it was hard initially but it brought so much happiness after we had our babies. Thank you very much GarbhaGudi IVF and thanks to the team & staff. Brilliant guidance. Amazing team.',
  },
];

/* Five gray stars with a yellow overlay clipped to the rating percentage —
 * shows the true 4.8 fill without a half-star icon. */
const Stars = ({ rating }: { rating: number }) => (
  <div className='relative inline-flex' aria-hidden='true'>
    <div className='flex text-gray-300'>
      {[...Array(5)].map((_, i) => (
        <HiStar key={i} className='h-7 w-7' />
      ))}
    </div>
    <div
      className='absolute inset-0 flex overflow-hidden text-yellow-400'
      style={{ width: `${(rating / 5) * 100}%` }}
    >
      {[...Array(5)].map((_, i) => (
        <HiStar key={i} className='h-7 w-7 shrink-0' />
      ))}
    </div>
  </div>
);

const Reviews = () => {
  return (
    <section className='bg-white' aria-labelledby='lp-reviews-heading'>
      <div className='mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
        <div className='text-center'>
          <span className='inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 font-content text-sm font-semibold text-gray-700'>
            <FcGoogle className='text-lg' aria-hidden='true' /> Google Reviews
          </span>
          <h2
            id='lp-reviews-heading'
            className='mt-4 font-heading text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'
          >
            Loved by families across Bangalore
          </h2>
          <div className='mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4'>
            <span className='font-heading text-5xl font-extrabold text-gray-900'>
              {AVERAGE_RATING}
            </span>
            <div className='flex flex-col items-center sm:items-start'>
              <Stars rating={AVERAGE_RATING} />
              <p className='mt-1 font-content text-sm text-gray-600'>
                Average Google rating across all our branches
              </p>
            </div>
          </div>
        </div>

        <div className='mt-10 grid gap-5 md:grid-cols-3'>
          {reviews.map((r) => (
            <figure
              key={r.id}
              className='flex flex-col justify-between rounded-xl border border-gg-100 bg-gg-50/40 p-6 shadow-sm'
            >
              <blockquote className='font-content text-sm leading-relaxed text-gray-700'>
                &quot;{r.review}&quot;
              </blockquote>
              <figcaption className='mt-5 flex items-center justify-between'>
                <span className='font-heading text-sm font-bold text-gray-900'>{r.name}</span>
                <span className='inline-flex items-center gap-1 font-content text-xs text-gray-500'>
                  <FcGoogle aria-hidden='true' /> Posted on Google
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
