"use client"
import {signIn} from 'next-auth/react';

const Login =  () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
     signIn('credentials', {
          email: formData.get('email'),
          password: formData.get('password'),
          redirect: false
     });

  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-auto max-w-md mt-10">
      <input  className="border border-black px-4" type="email" name="email" placeholder="Email" />
      <input className="border border-black px-4" type="password" name="password" placeholder="Password" />
      <button className="bg-blue-500 p-2" type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
