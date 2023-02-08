export default function ResultsTable(props) {
  return (
    <div>
      <h2 className="flex flex-row items-center justify-center">
        Report Table Coming Soon...
      </h2>
      <table className="w-1/2 mx-auto my-4">
        <tbody>
          {props.locations.map((item, idx) => {
            return (
              <tr key={idx}>
                <td className="font-light">Location: {item.city}</td>
                <td className="">minCustomer:{item.minCustomers}</td>
                <td className="">maxCustomer:{item.maxCustomers}</td>
                <td className="">avgCookies:{item.avgCookies}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
