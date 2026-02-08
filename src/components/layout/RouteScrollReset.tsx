"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function RouteScrollReset() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.toString();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = "auto";
      };
    }
    return;
  }, []);

  useLayoutEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlBehavior = html.style.scrollBehavior;
    const prevBodyBehavior = body.style.scrollBehavior;

    // Force an instant reset before the new route paints.
    html.style.scrollBehavior = "auto";
    body.style.scrollBehavior = "auto";
    html.scrollTop = 0;
    body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const raf = window.requestAnimationFrame(() => {
      html.style.scrollBehavior = prevHtmlBehavior;
      body.style.scrollBehavior = prevBodyBehavior;
    });

    return () => {
      window.cancelAnimationFrame(raf);
      html.style.scrollBehavior = prevHtmlBehavior;
      body.style.scrollBehavior = prevBodyBehavior;
    };
  }, [pathname, query]);

  return null;
}
