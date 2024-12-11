"use client";

import { useIsClient } from "@/hooks/useIsClient";
import { useEffect, useState } from "react";

export function TailwindIndicator() {
  const isClient = useIsClient();
  const [windowWith, setWindowWidth] = useState(0);

  useEffect(() => {
    if (!isClient) return;
    setWindowWidth(window.innerWidth);
    window.onresize = () => {
      setWindowWidth(window.innerWidth);
    };
  }, [isClient]);

  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-1 left-1 z-50 flex size-12 items-center justify-center rounded-full bg-gray-800 p-3 text-center font-mono text-xs text-white">
      <div className="block sm:hidden">
        {windowWith}
        <br />
        xs
      </div>
      <div className="hidden sm:block md:hidden">
        {windowWith}
        <br />
        sm
      </div>
      <div className="hidden md:block lg:hidden">
        {windowWith}
        <br />
        md
      </div>
      <div className="hidden lg:block xl:hidden">
        {windowWith}
        <br />
        lg
      </div>
      <div className="hidden xl:block 2xl:hidden">
        {windowWith}
        <br />
        xl
      </div>
      <div className="hidden 2xl:block">
        {windowWith}
        <br />
        2xl
      </div>
    </div>
  );
}
