"use client"

const Register =  () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          username: formData.get('username'),
          email: formData.get('email'),
          password: formData.get('password'),
        }),
      });

      console.log(response);
 
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-auto max-w-md mt-10">
      <input className="border border-black px-4" type="text" name="username" placeholder="Name" />
      <input  className="border border-black px-4" type="email" name="email" placeholder="Email" />
      <input className="border border-black px-4" type="password" name="password" placeholder="Password" />
      <button className="bg-blue-500 p-2" type="submit">
        Register
      </button>
    </form>
  );
};

export default Register;
