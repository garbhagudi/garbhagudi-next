import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
const BlogFooter = dynamic(() => import('components/blogFooter'), { ssr: false });
const Share = dynamic(() => import('components/share'), { ssr: false });

const CareerOrBaby = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Career or Baby? | GarbhaGudi IVF Centre</title>
        <meta name='title' content={`Career or Baby? | GarbhaGudi IVF Centre`} />
        <meta
          name='description'
          content='Today’s women and men are successful beyond imagination, and there
          comes a time when they have to choose between parenthood and a
          career. '
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content={`Career or Baby? | GarbhaGudi IVF Centre`} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='Today’s women and men are successful beyond imagination, and there
          comes a time when they have to choose between parenthood and a
          career. '
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1651215522/blogs/carrier_or_baby-min_uso9ey.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={`Career or Baby? | GarbhaGudi IVF Centre`} />
        <meta
          name='twitter:description'
          content='Today’s women and men are successful beyond imagination, and there
          comes a time when they have to choose between parenthood and a
          career. '
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1651215522/blogs/carrier_or_baby-min_uso9ey.webp'
        />
      </Head>
      <div className='mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-8'>
        <h5 className='mb-10 mt-6 text-center font-heading text-4xl font-extrabold leading-none md:text-5xl'>
          Career or Baby ?
        </h5>
        <div className='grid gap-4 lg:grid-cols-2'>
          <div>
            <Image
              className='h-64 w-full rounded-2xl object-cover shadow-lg sm:h-[360px]'
              src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1651215522/blogs/carrier_or_baby-min_uso9ey.webp'
              alt='Career or Baby ?'
              width={500}
              height={500}
              priority={true}
            />
          </div>
          <div className='lg:pr-10'>
            <p className='mb-6 font-content text-base text-gray-900'>
              Today’s women and men are successful beyond imagination, and there comes a time when
              they have to choose between parenthood and a career. The former always precedes as it
              becomes the purpose for the latter’s existence. Having a child surely gifts an eternal
              bliss, shuns selfishness, and above all, it brings happiness to life. You should
              realize that having one does not always require sacrificing the other. However, it’s
              highly essential to understand that the clock keeps ticking. There could be many
              reasons for men and women to postpone having a child. For men, a couple of main
              reasons could be anxieties while settling down to start a family and the battle
              between carrying out responsibilities against their advancing age, despite their
              family’s requests, societal threats, and sighs over their decision to plan for
              children. Whereas, for women, the number one reason is having financial freedom. They
              delay childbirth due to not having enough money, and they want to earn a higher salary
              first, be a self-supportive mom, and sometimes establish their dream career before
              having a baby.
            </p>
          </div>
        </div>
        <p className='mt-0 font-content text-gray-900 sm:mt-4'>
          We all know that age plays a crucial role in a woman's ability to get pregnant, but many
          of us often ignore that men’s age is equally important. Let’s look at male and female
          infertility, the causes, and solutions.
        </p>
        <hr className='my-3 mb-5 border-gray-300' />
      </div>
      <div className='mx-auto px-4 pb-6 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-7xl lg:px-8 lg:pb-10'>
        <div className='grid lg:grid-cols-2'>
          <div className='flex flex-col justify-center md:pr-8 lg:max-w-lg xl:pr-0'>
            <h2 className='mb-6 max-w-lg font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none'>
              The Male Infertility
            </h2>
            <div className='mb-6 max-w-xl'>
              <p className='font-content text-base text-gray-900'>
                Although a man’s fertility rate doesn’t drop abruptly as a woman’s, this doesn’t
                mean that every man remains capable of having a child throughout his lifetime. The
                quality of sperm becomes poor, and the number of sperms produced, the sperm’s
                ability to swim (motility), and the sperm’s shape (morphology) are all known to
                change with increasing age. All these factors drop significantly during their 40s
                compared to men in their 30s. Aged fathers are closely linked with adverse effects
                on their children as they are prone to damaged sperm DNAs that may lead to risks of
                unsuccessful pregnancies because of fertilization with an unhealthy sperm. This also
                means a high prevalence of genetic defects and disorders such as autism.
              </p>
            </div>
          </div>
          <div className='max-w-xl'>
            <Image
              src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1651215522/blogs/Male_infertility-min_xt4ouj.webp'
              alt='Male Infertility'
              className='rounded-3xl'
              width={500}
              height={500}
              loading='lazy'
            />
          </div>
        </div>
      </div>
      <div className='mx-auto px-4 pb-6 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-7xl lg:px-8 lg:pb-10'>
        <h2 className='mb-6 max-w-lg font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none'>
          The Female Infertility
        </h2>
        <div className='grid lg:grid-cols-2'>
          <div className='max-w-xl'>
            <Image
              src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1651215522/blogs/Female_fertility-min_yvazig.webp'
              alt='Female Infertility'
              className='rounded-3xl'
              width={500}
              height={500}
              loading='lazy'
            />
          </div>
          <div className='flex flex-col justify-center md:pr-8 lg:max-w-lg xl:pr-0'>
            <div className='mb-6 max-w-xl'>
              <p className='mt-4 font-content text-base text-gray-900 sm:mt-0'>
                A woman’s peak reproductive years remain between her late teens and late 20s. During
                the 30s, the fertility potential starts to decline. It becomes more drastic by the
                age of 30, and by 45, getting pregnant is difficult for women. Women who conceive
                after their early 30s have a high risk of various medical complications. Late
                pregnancy also affects the fetus’s health in many ways, and as a woman ages, the
                risk of having a baby with missing, ruptured, or extra chromosomes increases
                significantly. Miscarriages and stillbirths are noticed in women who are above 35.
                Multiple pregnancies that lead to various developmental issues for the fetus and
                maternal complications are more common in older women than younger women, as the
                ovaries tend to release more than one egg during a menstrual cycle.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto px-4 pb-6 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-7xl lg:px-8 lg:pb-10'>
        <h3 className='mb-6 max-w-lg font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none'>
          Improving Your Chances
        </h3>
        <p className='font-content text-base text-gray-900'>
          So, here’s the good news. The world of medicines is ready to support you despite all the
          odds! There are several treatment options for men and women to help them conceive,
          including Assisted Reproductive Technologies (ART).
        </p>
        <p className='my-6 font-heading text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none'>
          Treatment Options for Men
        </p>
        <ul className='list-inside list-disc space-y-2 font-content'>
          <li>
            Surgery, if the cause of infertility is varicocele or a blockage in the tubes that carry
            sperm (vas deferens)
          </li>
          <li>Antibiotics to get rid of the infections in reproductive parts.</li>
          <li>Medicines and therapy to treat ejaculation or erection problems.</li>
          <li>
            Hormone treatments if the problem is related to the fluctuation of certain hormones.
          </li>
        </ul>
        <p className='my-6 font-heading text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none'>
          Treatment Options for Women
        </p>
        <ul className='list-inside list-disc space-y-2 font-content'>
          <li>
            Fertility drugs and hormone therapy to help the woman ovulate or restore the vital
            hormones
          </li>
          <li>
            Minimally invasive surgeries such as laparoscopy and other procedures to treat
            conditions such as endometriosis or to open blocked fallopian tubes
          </li>
        </ul>
      </div>
      <div className='mx-auto px-4 py-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-8'>
        <div className='mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl'>
          <h2 className='mb-2 max-w-lg font-heading text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
            ART – The Real Boon!
          </h2>
        </div>
        <div className='mx-auto lg:max-w-2xl'>
          <div className='relative w-full'>
            <Image
              className='h-56 w-full rounded-3xl object-cover shadow-lg transition-shadow duration-300 hover:shadow-xl sm:h-64 md:h-80 lg:h-96'
              src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1651215522/blogs/ART_The_Real_Boon_-min_lqxqex.webp'
              alt='ART - The Real Boon!'
              width={500}
              height={500}
              loading='lazy'
            />
          </div>
        </div>
        <p className='mt-6 font-content text-gray-900'>
          You must have known about the popular ART treatments such as IVF - an advanced medical
          procedure where the woman's egg is fertilized by a sperm outside the body, IUI – a
          technique where sperms are placed in the uterus around the time when the ovary releases
          one or more eggs to be fertilized, and ICSI – which involves injecting a live sperm
          directly into the center of a human egg for successful fertilization and implantation to
          happen. Here comes the real boon – sperm freezing and egg freezing!
        </p>
      </div>
      <div className='mx-auto px-4 pb-6 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-7xl lg:px-8 lg:pb-10'>
        <div className='grid lg:grid-cols-2'>
          <div className='flex flex-col justify-center md:pr-8 lg:max-w-lg xl:pr-0'>
            <h2 className='mb-6 max-w-lg font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none'>
              Sperm Freezing
            </h2>
            <div className='mb-6 max-w-xl'>
              <p className='font-content text-base text-gray-900'>
                Sperm freezing, also called cryopreservation, is the process of preserving sperm
                cells for later use, which helps maintain men’s fertility potential even if they are
                delaying fatherhood for any reasons or undergoing treatments that jeopardize their
                ability to have a child. This process ensures sperm motility is never harmed, and
                the frozen sperm can be thawed and used to fertilize eggs. It can be done using
                artificial insemination techniques (IUI) or Assisted Reproductive Techniques
                (IVF/ICSI).
              </p>
            </div>
          </div>
          <div className='max-w-xl'>
            <Image
              src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1651215523/blogs/Egg_Freezing-min_zyhjfb.webp'
              alt='Sperm Freezing'
              className='rounded-3xl'
              width={500}
              height={500}
              loading='lazy'
            />
          </div>
        </div>
      </div>
      <div className='mx-auto px-4 pb-6 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-7xl lg:px-8 lg:pb-10'>
        <h2 className='mb-6 max-w-lg font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none'>
          Egg Freezing
        </h2>
        <div className='grid lg:grid-cols-2'>
          <div className='max-w-xl'>
            <Image
              src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1651215522/blogs/Sperm_Freezing-min_atfspg.webp'
              alt='Egg Freezing'
              className='rounded-3xl'
              width={500}
              height={500}
              loading='lazy'
            />
          </div>
          <div className='flex flex-col justify-center md:pr-8 lg:max-w-lg xl:pr-0'>
            <div className='mb-6 max-w-xl'>
              <p className='mt-4 font-content text-base text-gray-900 sm:mt-0'>
                Sperm freezing, also called cryopreservation, is the process of preserving sperm
                cells for later use, which helps maintain men’s fertility potential even if they are
                delaying fatherhood for any reasons or undergoing treatments that jeopardize their
                ability to have a child. This process ensures sperm motility is never harmed, and
                the frozen sperm can be thawed and used to fertilize eggs. It can be done using
                artificial insemination techniques (IUI) or Assisted Reproductive Techniques
                (IVF/ICSI).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto px-4 pb-6 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-7xl lg:px-8 lg:pb-10'>
        <h2 className='mb-6 max-w-lg font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none'>
          A Final Word
        </h2>
        <p className='font-content'>
          Parenting is never an easy job, and it’s not really an appreciable idea to postpone
          parenthood for a career. Maintaining a good balance is the key, and it all begins with
          planning your reproductive life wisely. Be creative, be consistent in whatever you do, and
          choose what is suitable for you. It is still possible to have a child and enjoy your
          parenthood with passion despite your hectic schedule. Prepare yourself to win the battle
          of a baby or career and discover the joys of being a successful individual personally and
          professionally!
        </p>
        <Share
          pinmedia={
            'https://res.cloudinary.com/garbhagudiivf/image/upload/v1651215522/blogs/carrier_or_baby-min_uso9ey.webp'
          }
        />
        <BlogFooter />
        <Image
          height='1'
          width='1'
          style={{ display: 'none' }}
          alt='facebookpixel'
          src='https://px.ads.linkedin.com/collect/?pid=2711450&conversionId=7808026&fmt=gif'
        />
      </div>
    </div>
  );
};

export default CareerOrBaby;
