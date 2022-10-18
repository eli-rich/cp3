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

interface ServerProps {
  error: string;
  md: string;
}

export default function Home({ md, error }: ServerProps) {
  if (error && typeof window !== 'undefined') alert(error);
  const html = marked(md);
  return (
    <>
      <Title title='Cowpen Creek Farm' />
      <NavBar />
      <Hero />
      <ContentContainer>
        <ContentWrapper serverHTML={html as string} />
      </ContentContainer>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  let md = '';
  let error = '';
  try {
    md = await fs.readFile(resolve(join(__dirname, '../../public/md/home.md')), 'utf8');
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
