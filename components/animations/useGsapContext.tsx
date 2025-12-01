"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function useGsapContext(
  callback: (ctx: gsap.Context) => void,
  deps: any[] = []
) {
  useGSAP(() => {
    const ctx = gsap.context(() => callback(ctx));
    return () => ctx.revert();
  }, deps);
}
