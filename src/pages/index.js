import Head from 'next/head';
import { useAuth } from '/context/auth';
import CookieStandAdmin from '/components/CookieStandAdmin';
import LoginForm from '/components/LoginForm';

export default function Home() {
  const { user, login } = useAuth();

  return (
    <div className='p-4'>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      {user ? (
        <CookieStandAdmin className='font-serif' />
      ) : (
        <LoginForm onLogin={login} />
      )}
    </div>
  );
}
