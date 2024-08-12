"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-neutral-900/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm border">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
           <Button asChild variant={'outline'}>
            <Link href={'/sign-up'}>
              Get started
            </Link>
           </Button>
          </ul>
        </div>
      </div>
    </header>
  );
}