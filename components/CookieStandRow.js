export default function CookieStandRow({ info, deleteStand }) {
  function clickHandler() {
    deleteStand(info.id);
  }

  if (info === undefined || info === null) {
    return (
      <h2 className='mx-auto my-4 text-2xl text-center'>
        No Cookie Stands Available
      </h2>
    );
  }

  if (info.hourly_sales.length == 0) {
    info.hourly_sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
  return (
    <tr className='text-lg border border-black even:bg-green-500 odd:bg-green-300'>
      <td className='flex items-center justify-between pl-4 mt-1 font-bold'>
        {info.location}
        <button onClick={clickHandler}>
          {
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 ml-5 mr-2 text-red-600 transition-all duration-200 cursor-pointer hover:text-black hover:pt-0'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
              />
            </svg>
          }
        </button>
      </td>
      {info.hourly_sales.map((slot, index) => (
        <td className='px-2 py-1 border border-black' key={index}>
          {slot}
        </td>
      ))}
      <td className='px-2 py-1 border border-black'>
        {info.hourly_sales.reduce((num, sum) => num + sum, 0)}
      </td>
    </tr>
  );
}
