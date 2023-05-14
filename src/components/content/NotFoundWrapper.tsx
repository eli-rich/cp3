import Link from 'next/link';

export default function NotFoundWrapper() {
  return (
    <>
      <article className='prose max-w-none text-black prose-headings:my-0 prose-headings:font-normal prose-h1:border-b-4 prose-h1:border-rose-300 prose-p:my-0 prose-p:leading-snug prose-ol:leading-tight prose-ul:leading-tight prose-li:leading-tight prose-li:marker:text-black prose-img:mx-4 prose-img:my-2 prose-img:inline prose-img:h-auto prose-img:max-h-80 prose-img:w-[20%] prose-img:bg-[#f5f4ef] prose-img:shadow-lg md:prose-img:max-w-xl'>
        <h1>404: Page Not Found.</h1>
        <p>Hmm. This page doesn't seem to exist.</p>
        <br />
        <p>If you're consistently seeing this message, please contact the website owner.</p>
      </article>
      <Link
        href='/'
        className='btn-primary btn mx-auto mt-10 w-1/2 text-2xl normal-case text-white shadow-sm hover:scale-105'
      >
        Take Me Home, Country Roads!
      </Link>
      <br />
    </>
  );
}
