import Title from '../components/utils/Title';
import NavBar from '../components/layout/NavBar';
import ContentContainer from '../components/content/ContentContainer';
import ContentWrapper from '../components/content/ContentWrapper';
import Footer from '../components/layout/Footer';

import { marked } from 'marked';
import { useEffect } from 'react';
import { PrismaClient } from '@prisma/client';

interface ServerProps {
  error: string;
  md: string;
}

export default function OurBeef({ md, error }: ServerProps) {
  if (error && typeof window !== 'undefined') {
    alert(`Fatal error: ${error.toString()}`);
    console.error(error);
  }
  const html = marked(md);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let elements = Array.from(document.querySelectorAll('p > img'));
      elements = elements.map((element) => element.parentElement) as HTMLElement[];
      elements.forEach((element) => {
        element.classList.add('ff-fix');
      });
      // check if the beef breakdown image is present, if so, add the appropriate classes
      // else, return
      if (elements[3]) elements[3].classList.add('bb-container');
      else return;

      const bbreakdownGraphic = elements[3].querySelector('img');
      if (bbreakdownGraphic) bbreakdownGraphic.classList.add('beef-breakdown');
    }
  }, []);

  return (
    <>
      <Title title='Cowpen Creek Farm' />
      <NavBar />
      <div className='mt-24'>
        <ContentContainer>
          <ContentWrapper serverHTML={html} />
        </ContentContainer>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();

  let md = '';
  let error = '';
  try {
    const data = await prisma.ourBeef.findFirst({
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
