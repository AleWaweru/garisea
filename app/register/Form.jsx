import React, { useState } from 'react';
import Link from 'next/link';

function Form() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      }),
    });

    console.log(response);

    if (response.ok) {
      setFormData({
        username: '',
        email: '',
        password: '',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center gap-4 mx-auto max-w-md mt-10 p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
        <input
          className="border border-gray-300 rounded px-4 py-2"
          type="text"
          name="username"
          placeholder="Name"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          className="border border-gray-300 rounded px-4 py-2"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="border border-gray-300 rounded px-4 py-2"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="bg-blue-500 text-white rounded py-2" type="submit">
          Register
        </button>
      </form>
      <span>
        Already have an account?{' '}
        <Link href="/login" className="text-blue-500">
          Login
        </Link>
      </span>
    </div>
  );
}

export default Form;
