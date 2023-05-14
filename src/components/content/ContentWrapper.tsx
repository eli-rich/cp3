export default function ContentWrapper({ serverHTML }: { serverHTML: string }) {
  return (
    <article className='prose max-w-none text-black prose-headings:my-0 prose-headings:font-normal prose-h1:border-b-4 prose-h1:border-rose-300 prose-p:my-0 prose-p:leading-snug prose-ol:leading-tight prose-ul:leading-tight prose-li:leading-tight prose-li:marker:text-black prose-img:mx-4 prose-img:my-2 prose-img:inline prose-img:h-auto prose-img:w-[20%] md:prose-img:max-w-xl'>
      <div dangerouslySetInnerHTML={{ __html: serverHTML }} className='font-sans'></div>
    </article>
  );
}
