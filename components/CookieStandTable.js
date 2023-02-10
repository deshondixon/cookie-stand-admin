import CookieStandRow from '/components/CookieStandRow';

export default function CookieStandTable({ stands, deleteStand }) {
  const headerTimes = [
    '6 am',
    '7 am',
    '8 am',
    '9 am',
    '10 am',
    '11 am',
    '12 pm',
    '1 pm',
    '2 pm',
    '3 pm',
    '4 pm',
    '5 pm',
    '6 pm',
    '7 pm',
  ];

  return (
    <table className='mx-auto font-serif text-center border border-black shadow-md shadow-gray-500'>
      <thead>
        <tr className='bg-green-500'>
          <th className='px-2 py-1 border border-black'>Location</th>
          {headerTimes.map((time, index) => (
            <th className='px-2 py-1 border border-black' key={index}>
              {time}
            </th>
          ))}
          <th className='px-2 py-1 border border-black'>Totals</th>
        </tr>
      </thead>
      <tbody>
        {stands.map((stand) => (
          <CookieStandRow
            key={stand.id}
            info={stand}
            deleteStand={deleteStand}
          />
        ))}
      </tbody>
    </table>
  );
}
