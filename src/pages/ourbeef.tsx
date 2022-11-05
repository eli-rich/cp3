import Title from '../components/utils/Title';
import NavBar from '../components/layout/NavBar';
import ContentContainer from '../components/content/ContentContainer';
import ContentWrapper from '../components/content/ContentWrapper';
import Footer from '../components/layout/Footer';

import { marked } from 'marked';
import { useEffect } from 'react';
import { createClient } from 'redis';

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
      if (elements[3]) elements[3].classList.add('bb-container');

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
          <ContentWrapper serverHTML={html as string} />
        </ContentContainer>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    socket: {
      host: 'redis',
      port: 6379,
    },
  });

  let md = '';
  let error = '';
  try {
    await client.connect().then(() => console.log('Connected to Redis -- /'));
    await client
      .sendCommand(['AUTH', process.env.REDIS_PASSWORD as string])
      .then(() => console.log('Authenticated to Redis -- /'));
    const data = await client.LRANGE('ourbeef', 0, 0);
    md = data[0];
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
