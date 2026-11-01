"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import siteIcon from "../img/icon.png";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const finishLoading = () => setVisible(false);
    const fallback = window.setTimeout(finishLoading, 7000);

    window.addEventListener("load", finishLoading, { once: true });
    if (document.readyState === "complete") finishLoading();

    return () => {
      window.clearTimeout(fallback);
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  return (
    <div className={`loading-screen${visible ? "" : " loading-screen-hidden"}`} role="status" aria-label="Memuat portofolio">
      <div className="loading-content">
        <Image src={siteIcon} alt="Logo Rizki Mulyawan" priority />
        <span>Rizki Mulyawan</span>
        <div className="loading-track" aria-hidden="true"><span /></div>
      </div>
    </div>
  );
}
