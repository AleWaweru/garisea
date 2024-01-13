"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  return (
    <span
      onClick={handleLogout}
      style={{
        cursor: "pointer",
        color: "blue",
        textDecoration: "underline",
        marginLeft: "10px",
      }}
    >
      Logout
    </span>
  );
}
