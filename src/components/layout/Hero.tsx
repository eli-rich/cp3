import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <div className='hero bg-main-hero-bg min-h-screen border-b-4 mb-4 border-black'>
        <div className='hero-content text-center text-base-100'>
          <div className=''>
            <h1 className='text-5xl sm:text-6xl font-bold mb-4 border-b-2'>Cowpen Creek Farm</h1>
            <Link
              href='/ourbeef'
              className='btn btn-primary text-2xl text-base-100 mt-2 motion-safe:animate-button-pulse'
            >
              Our Beef
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
