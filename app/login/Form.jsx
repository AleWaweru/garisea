"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Form() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (!response?.error) {
      router.push("/todo");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mx-auto max-w-md mt-10 p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
        <input
          className="border border-gray-300 rounded px-4 py-2"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="border border-gray-300 rounded px-4 py-2"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="bg-blue-500 text-white rounded py-2" type="submit">
          Login
        </button>
      </form>
      <span>
        Dont have an account?{" "}
        <Link href="/register" className="text-blue-500">
          Register
        </Link>
      </span>
    </div>
  );
}

export default Form;
