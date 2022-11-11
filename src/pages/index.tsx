import Title from '../components/utils/Title';
import NavBar from '../components/layout/NavBar';
import Hero from '../components/layout/Hero';
import ContentContainer from '../components/content/ContentContainer';
import ContentWrapper from '../components/content/ContentWrapper';
import Footer from '../components/layout/Footer';

import { marked } from 'marked';
import { PrismaClient } from '@prisma/client';

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
  const prisma = new PrismaClient();

  let md = '';
  let error = '';
  try {
    const data = await prisma.home.findFirst({
      orderBy: {
        date: 'desc',
      },
    });
    if (data) md = data.md.toString();
    else md = `# Internal Server Error`;
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
