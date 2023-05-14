export default function ContentContainer({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='card mx-auto rounded-sm bg-white p-4 shadow-2xl sm:w-5/6 md:w-2/3'>{children}</div>
    </>
  );
}
