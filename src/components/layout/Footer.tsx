import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='mx-auto mt-10 flex w-screen flex-col items-center bg-slate-700 py-10'>
      <Link href='/editor' className='text-md w-1/3 text-center text-gray-400'>
        Editor
      </Link>
      <p className='mb-2 text-white'>Copyright © Eli Richardson {new Date().getFullYear()}</p>
      <Image alt='logo' src='/img/logo.webp' width='236' height='155' />
    </footer>
  );
}
