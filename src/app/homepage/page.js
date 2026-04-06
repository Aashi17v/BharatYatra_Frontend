"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Banner from "../components/banner";
import Card_section from "../components/card_section";
import Feedback from "../components/feedback";
import Heritage from "../components/heritage";
import Last_section from "../components/last_section";
import Qualities from "../components/qualities";

export default function Homepage() {

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/auth");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Checking login...</p>;
  }

  return (
    <>
      <Banner />
      <Card_section />
      <Heritage />
      <Qualities />
      <Feedback />
      <Last_section />
    </>
  );
}