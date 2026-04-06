"use client";

import { usePathname, useRouter } from "next/navigation";
import Header from "./header";
import Footer from "./footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const isAuthPage = pathname === "/auth";

  // ✅ Logout function here
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.replace("/auth");
  };

  return (
    <>
      {!isAuthPage && <Header onLogout={handleLogout} />}

      {children}

      {!isAuthPage && <Footer />}
    </>
  );
}