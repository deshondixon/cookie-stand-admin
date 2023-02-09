export default function Footer({ questionAskedHandler }) {
  return (
    <footer className='p-4 mt-8 text-xl bg-green-400 text-black-50'>
      <p>{questionAskedHandler.length} Locations World Wide</p>
    </footer>
  );
}
