import { useAuth } from '/context/auth';
import useResource from '/hooks/useResource';

export default function CookieStandForm() {
  const { user } = useAuth();
  const { createResource } = useResource();

  function handleSubmit(event) {
    event.preventDefault();
    const info = {
      location: event.target.location.value,
      minimum_customers_per_hour: parseInt(event.target.minimum.value),
      maximum_customers_per_hour: parseInt(event.target.maximum.value),
      average_cookies_per_sale: parseFloat(event.target.average.value),
      owner: user.id,
    };
    createResource(info);
  }

  return (
    <form onSubmit={handleSubmit} className='w-1/2 p-2 mx-auto my-4 '>
      <fieldset className=''>
        <legend className='py-3 text-4xl text-center'>
          Create Cookie Stand
        </legend>
        <section className='flex py-2'>
          <label htmlFor='location' className='px-2'>
            Location:
          </label>
          <input
            className='px-3 text-center border'
            placeholder='location'
            name='location'
          />
        </section>
        <section className='flex justify-between py-2'>
          <div>
            <label htmlFor='minimum' className='block px-2 text-center'>
              Minimum Sale per Hour
            </label>
            <input
              className='px-3 text-center border'
              placeholder='minimum'
              name='minimum'
            />
          </div>
          <div>
            <label htmlFor='maximum' className='block px-2 text-center'>
              Maximum Sale per Hour
            </label>
            <input
              className='px-3 text-center border'
              placeholder='maximum'
              name='maximum'
            />
          </div>
          <div>
            <label htmlFor='average' className='block px-2 text-center'>
              Average Cookies per Sale
            </label>
            <input
              className='px-3 text-center border'
              placeholder='average'
              name='average'
            />
          </div>
          <button className='py-4 text-xl'>Create</button>
        </section>
      </fieldset>
    </form>
  );
}
