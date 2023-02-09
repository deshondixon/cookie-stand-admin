export default function CreateForm({ questionAskedHandler }) {
  return (
    <form
      className='p-2 pb-10 mx-auto my-4 bg-green-400 rounded-lg max-w-7xl'
      onSubmit={questionAskedHandler}
    >
      <h2 className='pt-3 text-3xl text-center'>Create Cookie Stand</h2>
      <div className='flex justify-between p-3 my-4 text-center '>
        <label htmlFor='locationName' className='p-2 pr-3 text-xl'>
          Location
        </label>
        <input
          name='locationName'
          className='flex-auto pl-1'
          id='locationName'
        />
      </div>
      <div className='flex justify-center m-auto text-center '>
        <div className='p-3 m-auto bg-green-300 rounded-lg w-72 '>
          <label htmlFor='minCustomers' className='block p-1 text-xl'>
            Min Customers per Hour
          </label>
          <input
            name='minCustomers'
            className='flex-auto w-64 pl-1'
            id='minCustomers'
          />
        </div>
        <div className='p-3 m-auto bg-green-300 rounded-lg w-72'>
          <label htmlFor='maxCustomers' className='block p-1 text-xl'>
            Max Customers per hour
          </label>
          <input
            name='maxCustomers'
            className='flex-auto w-64 pl-1'
            id='maxCustomers'
          />
        </div>
        <div className='p-3 m-auto bg-green-300 rounded-lg w-72'>
          <label htmlFor='avgCookies' className='block p-1 text-lg'>
            Average Cookies per Sale
          </label>
          <input
            name='avgCookies'
            className='flex-auto w-64 pl-1'
            id='avgCookies'
          />
        </div>
        <button className='h-20 m-auto bg-green-500 rounded-lg w-60 text-gray-50'>
          Create
        </button>
      </div>
    </form>
  );
}
