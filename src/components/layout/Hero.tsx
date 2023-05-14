import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <div className='hero mb-4 min-h-screen border-b-4 border-black bg-main-hero-bg'>
        <div className='hero-content text-center text-base-100'>
          <div className=''>
            <h1 className='mb-4 border-b-2 text-5xl font-bold sm:text-6xl'>Cowpen Creek Farm</h1>
            <Link
              href='/ourbeef'
              className='btn-primary btn mt-2 text-2xl text-base-100 motion-safe:animate-button-pulse'
            >
              Our Beef
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
