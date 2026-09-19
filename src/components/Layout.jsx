import { useEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Lenis from "lenis";
import Header from "./Header";
import Footer from "./Footer";
import "../rain-bg.css";

export default function Layout() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="page">
      <div className="rain-bg"></div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
}
