import React, { ReactNode } from "react";

interface PopUpProps {
  menuOpen?: boolean;
  children: ReactNode;
}
export default function Popup({ menuOpen, children }: PopUpProps) {
  return (
    <section
      className={`absolute transition-all duration-[400ms] ease-in-out top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 ${
        menuOpen ? "h-full" : "h-[0%] overflow-hidden pointer-events-none"
      } w-full flex flex-col items-center justify-center gap-2`}
    >
      {children}
    </section>
  );
}
