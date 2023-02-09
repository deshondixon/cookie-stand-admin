export default function ReportTable({ locations, tableHeaders }) {
  return locations.length > 0 ? (
    <table className='w-1/2 mx-auto my-4 '>
      <thead>
        <tr>
          <th className='bg-green-500 rounded-tl-lg'>Location</th>
          <th className='bg-green-500 '>Min Customers per Hour</th>
          <th className='bg-green-500 '>Max Customers per hour</th>
          <th className='bg-green-500 rounded-tr-lg'>
            Average Cookies per Sale
          </th>
        </tr>
      </thead>
      <tbody>
        {locations.map((item, idx) => {
          return (
            <tr key={idx}>
              <td className='pl-2 bg-green-400 border border-gray-900'>
                {item.name}
              </td>
              <td className='pl-2 bg-green-400 border border-gray-900'>
                {item.minCustomers}
              </td>
              <td className='pl-2 bg-green-400 border border-gray-900'>
                {item.maxCustomers}
              </td>
              <td className='pl-2 bg-green-400 border border-gray-900'>
                {item.avgCookies}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <h2 className='text-4xl text-center'>No Cookie Stands Available</h2>
  );
}
