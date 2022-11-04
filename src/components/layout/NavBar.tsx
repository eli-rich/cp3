import Link from 'next/link';

export default function NavBar() {
  return (
    <header className='navbar flex justify-evenly bg-base-100 border-b-4 border-black fixed z-10 top-0'>
      <Link href='/' className='btn btn-ghost text-md w-1/3'>
        Home
      </Link>
      <Link href='/ourbeef' className='btn btn-ghost text-md w-1/3'>
        Our Beef
      </Link>
      <a
        className='btn btn-ghost text-md w-1/3'
        href='https://www.facebook.com/Nadinedeesrichardson'
        target='blank'
        rel='noreferrer'
      >
        Facebook
      </a>
    </header>
  );
}
