import Link from 'next/link';

export default function NotFoundWrapper() {
  return <>
    <article className='prose prose-p:leading-snug prose-ul:leading-tight prose-li:leading-tight prose-ol:leading-tight max-w-none prose-p:my-0 prose-headings:font-normal prose-headings:my-0 prose-h1:border-b-4 prose-h1:border-rose-300 prose-img:w-[20%] prose-img:h-auto prose-img:my-2 prose-img:mx-4 prose-img:inline md:prose-img:max-w-xl prose-img:max-h-80 prose-img:shadow-lg prose-img:bg-[#f5f4ef] text-black prose-li:marker:text-black'>
      <h1>404: Page Not Found.</h1>
      <p>Hmm. This page doesn't seem to exist.</p>
      <br />
      <p>If you're consistently seeing this message, please contact the website owner.</p>
    </article>
    <Link
      href='/'
      className='btn btn-primary text-white text-2xl normal-case w-1/2 mt-10 mx-auto shadow-sm hover:scale-105'>
      
        Take Me Home, Country Roads!
      
    </Link>
    <br />
  </>;
}
