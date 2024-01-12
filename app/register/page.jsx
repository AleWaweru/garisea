"use client"
import { useEffect } from 'react';
import { getServerSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from './Form';

const Register = () => {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const session = await getServerSession();
      if (session) {
        router.push('/'); 
      }
    };

    checkSession();
  }, [router]);

  return <Form />;
};

export default Register;
