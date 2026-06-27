"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MetaPixel() {
  const pathname = usePathname();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        // Tracker initialized with your specific ID
        ReactPixel.init("2063833570871887"); 
        ReactPixel.pageView();
      });
  }, [pathname]);

  return null;
}
