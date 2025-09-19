import fs from 'fs';
import path from 'path';

export default function ContactPage({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'contact11.html');
  const html = fs.readFileSync(filePath, 'utf-8');

  return {
    props: { html },
    revalidate: 60, // optional ISR
  };
}
