// import AuthPage from "./login/page";


// export default function Page() {
//   return <AuthPage  />;
// }
// "use client";
// import { useEffect } from "react";

// export default function Home() {
//   useEffect(() => {
//     const userId = localStorage.getItem("userId");

//     if (userId) {
//       window.location.href = "/homepage"; // already logged in
//     } else {
//       window.location.href = "/login"; // force login
//     }
//   }, []);

//   return <p style={{ textAlign: "center" }}>Loading...</p>;
// }
"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/auth"; // always go to login
  }, []);

  return <p style={{ textAlign: "center" }}>Loading...</p>;
}