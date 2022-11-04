import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='w-screen flex flex-col mx-auto mt-10 items-center bg-slate-700 py-10'>
      <Link href='/editor' className='text-md w-1/3 text-center text-gray-400'>
        Editor
      </Link>
      <p className='text-white mb-2'>Copyright © Eli Richardson {new Date().getFullYear()}</p>
      <Image alt='logo' src='/img/logo.webp' width='236px' height='155px' />
    </footer>
  );
}
