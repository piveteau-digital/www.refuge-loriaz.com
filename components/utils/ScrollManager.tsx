// components/ScrollManager.tsx
"use client";

import { useEffect, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface ScrollManagerProps {
  // Time to wait before scrolling to anchor (useful for dynamic content)
  delay?: number;
  // Offset from the top of the element (useful for fixed headers)
  offset?: number;
}

export default function ScrollManager({
  delay = 0,
  offset = 0,
}: ScrollManagerProps = {}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleScroll = useCallback(
    (hash: string | null) => {
      if (!hash) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, delay);
    },
    [delay, offset],
  );

  // Handle initial load and pathname changes
  useEffect(() => {
    handleScroll(window.location.hash);
  }, [pathname, searchParams, handleScroll]);

  // Handle hash changes without pathname changes
  useEffect(() => {
    const handleHashChange = () => {
      handleScroll(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [handleScroll]);

  return null;
}
