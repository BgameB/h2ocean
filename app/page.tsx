"use client";

import { useEffect } from "react";

export default function Home() {
  // window.location.href = "/learn";

  useEffect(() => {
    window.location.href = "/learn";
  }, []);

  return <div className="flex"></div>;
}
