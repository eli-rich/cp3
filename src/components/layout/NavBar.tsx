import Link from 'next/link';

export default function NavBar() {
  return (
    <header className='navbar fixed top-0 z-10 flex justify-evenly border-b-4 border-black bg-base-100'>
      <Link href='/' className='text-md btn-ghost btn w-1/3'>
        Home
      </Link>
      <Link href='/ourbeef' className='text-md btn-ghost btn w-1/3'>
        Our Beef
      </Link>
      <a
        className='text-md btn-ghost btn w-1/3'
        href='https://www.facebook.com/Nadinedeesrichardson'
        target='blank'
        rel='noreferrer'
      >
        Facebook
      </a>
    </header>
  );
}
