export default function LoginForm({ onLogin }) {
  async function handleSubmit(event) {
    event.preventDefault();
    onLogin(event.target.username.value, event.target.password.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center justify-center h-screen font-serif bg-green-500'
    >
      <fieldset
        autoComplete='off'
        className='flex flex-col items-center justify-center'
      >
        <label className='mt-5 mb-1' htmlFor='username'>
          Username
        </label>
        <input
          className='px-10 py-1 text-center border border-gray-500 rounded-lg shadow-md shadow-gray-700'
          placeholder='username'
          name='username'
        />
        <label className='mt-5 mb-1' htmlFor='password'>
          Password
        </label>
        <input
          className='px-10 py-1 text-center border border-gray-500 rounded-lg shadow-md shadow-gray-700'
          placeholder='password'
          type='password'
          name='password'
        />
        <button className='px-16 py-3 m-4 text-2xl text-white transition-all duration-200 bg-green-700 border border-black rounded-lg shadow-md shadow-gray-700 hover:bg-red-500 hover:text-black hover:rounded-2xl'>
          Sign In
        </button>
      </fieldset>
    </form>
  );
}
