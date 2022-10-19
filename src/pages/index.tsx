import Title from '../components/utils/Title';
import NavBar from '../components/layout/NavBar';
import Hero from '../components/layout/Hero';
import ContentContainer from '../components/content/ContentContainer';
import ContentWrapper from '../components/content/ContentWrapper';
import Footer from '../components/layout/Footer';

import { marked } from 'marked';
import { createClient } from 'redis';

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
    const data = await client.LRANGE('home', 0, 0);
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
