import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-screen flex flex-col mx-auto mt-10 items-center bg-slate-700 py-10'>
      <Link href='/editor'>
        <a className='text-md w-1/3 text-center text-gray-400'>Editor</a>
      </Link>
      <p className='text-white mb-2'>Copyright © Eli Richardson {new Date().getFullYear()}</p>
      <img src='/img/logo.webp' style={{ width: '236px', height: '155px' }} />
    </footer>
  );
}
