import { getServerSession } from "next-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RegisterCheckSession = () => {
    const router = useRouter();
    useEffect(() => {
        const checkSession = async () => {
          const session = await getServerSession();
          if (session) {
            router.push("/");
            router.refresh();
          }
        };
        checkSession();
      }, [router]);
    
      // Return null or any other content if needed
      return null;
  
}

export default RegisterCheckSession