import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";
export function Footer() {
  return <footer className="footer"><div className="container footer-inner"><div><Link href="/" className="footer-brand">AI from scratch<span>.</span></Link><p>Big ideas. Small experiments. Real understanding.</p></div><div className="footer-links"><Link href="/learn">Learn</Link><Link href="/playground">Playground</Link><Link href="/about">About</Link><a href="https://www.youtube.com/@TechwithPraiseJames" target="_blank" rel="noreferrer">YouTube <ArrowUpRight size={14}/></a></div></div><div className="container footer-bottom"><span>Made with <Heart size={13} fill="currentColor" /> by Praise James</span><span>Learn at your own pace. Always.</span></div></footer>;
}
