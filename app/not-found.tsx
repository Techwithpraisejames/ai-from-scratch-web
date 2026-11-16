import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound(){return <div className="not-found"><span>404 / WRONG TURN</span><h1>Looks like this idea<br/><em>isn't here yet.</em></h1><p>Let&apos;s get you back on the learning journey.</p><Link href="/learn" className="button button-dark"><ArrowLeft size={18}/> Back to lessons</Link></div>}
