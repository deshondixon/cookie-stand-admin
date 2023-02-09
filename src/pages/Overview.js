import Link from 'next/link';

export default function Overview() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-4xl'> Overview Page coming soon</h1>
      <Link href='/' className='p-4 m-4 text-2xl bg-gray-300 rounded-lg'>
        Home
      </Link>
    </div>
  );
}
