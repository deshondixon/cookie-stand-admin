import { useAuth } from '/context/auth';
import Link from 'next/link';

export default function Header() {
  const { user, login } = useAuth();

  return (
    <header className='flex items-center justify-between p-4 text-black'>
      <h1 className='text-4xl'>Cookie Stand Admin</h1>
      <section>
        <button className='px-4 py-2 mx-5 text-2xl text-black bg-green-500 rounded-lg'>
          {user.username}
        </button>
        <button className='px-4 py-2 mr-20 text-2xl text-white transition-all duration-200 bg-green-800 rounded-lg hover:bg-green-500 hover:text-black'>
          Logout
        </button>
      </section>
      <Link
        href='/Overview'
        className='px-4 py-2 mr-20 text-2xl text-white transition-all duration-200 bg-green-800 rounded-lg hover:bg-green-500 hover:text-black'
      >
        Overview
      </Link>
    </header>
  );
}
