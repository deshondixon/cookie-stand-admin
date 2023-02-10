import { useAuth } from '/context/auth';
import { useState } from 'react';
import Head from 'components/Head';
import Header from '/components/Header';
import Footer from '/components/Footer';
import ReportTable from 'components/ReportTable';
import CreateForm from 'components/CreateForm';
import useResource from '../hooks/useResource';

export default function Home() {
  const { user, login } = useAuth();
  const [locations, setLocations] = useState([]);

  function questionAskedHandler(e) {
    e.preventDefault();
    const location = {
      name: e.target.locationName.value,
      minCustomers: e.target.minCustomers.value,
      maxCustomers: e.target.maxCustomers.value,
      avgCookies: e.target.avgCookies.value,
      id: locations.length,
    };
    setLocations([...locations, location]);
  }

  return (
    <>
      <Head />

      <Header />

      <main className=''>
        {user ? (
          <CreateForm questionAskedHandler={questionAskedHandler} />
        ) : (
          <LoginForm onLogin={login} />
        )}
        <ReportTable locations={locations} />
      </main>

      <Footer questionAskedHandler={questionAskedHandler} />
    </>
  );
}

function LoginForm({ onLogin }) {
  async function handleSubmit(event) {
    event.preventDefault();
    onLogin(event.target.username.value, event.target.password.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset autoComplete='off'>
        <legend>Log In</legend>
        <label htmlFor='username'>Username</label>
        <input name='username' />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' />
        <button>Log In</button>
      </fieldset>
    </form>
  );
}
