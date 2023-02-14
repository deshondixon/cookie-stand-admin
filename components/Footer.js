import Link from 'next/link';

export default function Footer({ stands }) {
  return (
    <footer className='p-4 mt-8 font-serif text-center text-black bg-green-300'>
      <p className='text-xl'>{stands.length} Locations World Wide</p>
      <p>&copy; 2023</p>
      <Link href='/Overview' className='text-black hover:text-red-500'>
        Overview
      </Link>
    </footer>
  );
}
