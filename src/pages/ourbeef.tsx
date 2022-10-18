import Title from '../components/utils/Title';
import NavBar from '../components/layout/NavBar';
import Hero from '../components/layout/Hero';
import ContentContainer from '../components/content/ContentContainer';
import ContentWrapper from '../components/content/ContentWrapper';
import Footer from '../components/layout/Footer';

import fs from 'node:fs/promises';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { marked } from 'marked';
import { useEffect } from 'react';

interface ServerProps {
  json?: string;
  error: string;
  md: string;
}

export default function OurBeef({ md, error }: ServerProps) {
  if (error && typeof window !== 'undefined') alert(error);
  const html = marked(md);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let elements = Array.from(document.querySelectorAll('p > img'));
      elements = elements.map((element) => element.parentElement) as HTMLElement[];
      elements.forEach((element) => {
        element.classList.add('ff-fix');
      });
    }
  }, []);

  return (
    <>
      <Title title='Cowpen Creek Farm' />
      <NavBar />
      <div className='mt-24'>
        <ContentContainer>
          <ContentWrapper serverHTML={html as string} />
        </ContentContainer>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  let md = '';
  let error = '';
  try {
    md = await fs.readFile(resolve(join(__dirname, '../../public/md/ourbeef.md')), 'utf8');
  } catch (e) {
    error = (e as Error).message;
  }
  return {
    props: {
      md,
      error,
    },
    revalidate: 120,
  };
}
