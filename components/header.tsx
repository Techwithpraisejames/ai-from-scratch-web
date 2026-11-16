"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "The journey", href: "/learn" },
  { label: "Playground", href: "/playground" },
  { label: "Our story", href: "/about" },
];
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container nav-inner">
    <Link className="brand" href="/" onClick={() => setOpen(false)} aria-label="AI From Scratch home"><span className="brand-mark">a<span>✳</span></span><span>AI from scratch<span className="brand-period">.</span></span></Link>
    <nav aria-label="Main navigation" className={`nav-links ${open ? "nav-open" : ""}`}>
      {links.map((link) => <Link key={link.href} className={path === link.href ? "nav-active" : ""} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
      <Link className="nav-start" href="/learn" onClick={() => setOpen(false)}>Start learning <ArrowUpRight size={16} /></Link>
    </nav>
    <button aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} className="mobile-toggle" onClick={() => setOpen(v => !v)}>{open ? <X /> : <Menu />}</button>
  </div></header>;
}
