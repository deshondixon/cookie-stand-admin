export default function LoginForm({ onLogin }) {
  async function handleSubmit(event) {
    event.preventDefault();
    onLogin(event.target.username.value, event.target.password.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center justify-center'
    >
      <fieldset
        autoComplete='off'
        className='flex flex-col items-center justify-center'
      >
        <label className='' htmlFor='username'>
          Username
        </label>
        <input className='' placeholder='username' name='username' />
        <label className='' htmlFor='password'>
          Password
        </label>
        <input
          className=''
          placeholder='password'
          type='password'
          name='password'
        />
        <button className=''>Sign In</button>
      </fieldset>
    </form>
  );
}
