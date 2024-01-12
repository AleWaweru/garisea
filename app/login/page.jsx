"use client"
import { getServerSession } from "next-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Form from "./Form";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const session = await getServerSession();
      if (session) {
        router.push("/todo");
      }
    };

    checkSession();
  }, [router]);

  return <Form />;
};

export default Login;
