import Link from 'next/link';

export default function Header(props) {
  return (
    <header className='flex items-center justify-between p-4 text-4xl bg-green-400 text-black-50'>
      <h1 className='text-3xl font-medium'>Cookie Stand Admin</h1>
      <Link
        href='/Overview'
        className='w-24 text-xl font-medium text-center rounded-lg bg-gray-50'
      >
        Overview
      </Link>
    </header>
  );
}
