export default function ContentContainer({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='card md:w-2/3 sm:w-5/6 bg-white shadow-2xl mx-auto rounded-sm p-4'>{children}</div>
    </>
  );
}
