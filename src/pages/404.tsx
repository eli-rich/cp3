import ContentContainer from '../components/content/ContentContainer';
import NotFoundWrapper from '../components/content/NotFoundWrapper';
import NavBar from '../components/layout/NavBar';
import Footer from '../components//layout/Footer';

export default function NotFound() {
  return (
    <>
      <NavBar />
      <div className='mt-24 flex h-screen flex-col'>
        <div className='flex-shrink flex-grow basis-auto'>
          <ContentContainer>
            <NotFoundWrapper />
          </ContentContainer>
        </div>
        <div className='flex-shrink-0'>
          <Footer />
        </div>
      </div>
    </>
  );
}
