import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LandingPage_call() {
  const router = useRouter();

  useEffect(() => {
    const currentPath = router.pathname;
    const targetPath = '/lp/ivf-enquiry-form';

    if (currentPath !== targetPath) {
      router.push(targetPath);
    }
  }, [router]);

  return (
    <div>
      <Head>
        <link
          rel='preload'
          href='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vb8rq586d07plsiue972s'
          as='image'
        />

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India</title>
        <meta
          name='title'
          content='GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India'
        />
        <meta
          name='description'
          content='GarbhaGudi is a modern infertility hospital chain offering advanced treatments with state-of-the-art technology and world-class infrastructure.'
        />

        {/* Open Graph / Facebook */}
        <meta
          property='og:title'
          content='GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='GarbhaGudi is a modern infertility hospital chain offering advanced treatments with state-of-the-art technology and world-class infrastructure.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8v87qr57nu07plks7j7nzs'
        />

        {/* Twitter*/}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India'
        />
        <meta
          name='twitter:description'
          content='GarbhaGudi is a modern infertility hospital chain offering advanced treatments with state-of-the-art technology and world-class infrastructure.'
        />
        <meta
          name='twitter:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8v87qr57nu07plks7j7nzs'
        />
      </Head>
      <h1>Redirect....</h1>
    </div>
  );
}
