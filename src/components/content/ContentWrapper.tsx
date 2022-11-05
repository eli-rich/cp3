export default function ContentWrapper({ serverHTML }: { serverHTML: string }) {
  return (
    <article className='prose prose-p:leading-snug prose-ul:leading-tight prose-li:leading-tight prose-ol:leading-tight max-w-none prose-p:my-0 prose-headings:font-normal prose-headings:my-0 prose-h1:border-b-4 prose-h1:border-rose-300 prose-img:w-[20%] prose-img:h-auto prose-img:my-2 prose-img:mx-4 prose-img:inline md:prose-img:max-w-xl text-black prose-li:marker:text-black'>
      <div dangerouslySetInnerHTML={{ __html: serverHTML }} className='font-sans'></div>
    </article>
  );
}
