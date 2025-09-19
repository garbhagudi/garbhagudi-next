import fs from 'fs';
import path from 'path';

export default function ThankYouPage({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'thank-you.html');
  const html = fs.readFileSync(filePath, 'utf-8');

  return {
    props: { html },
    revalidate: 60,
  };
}
