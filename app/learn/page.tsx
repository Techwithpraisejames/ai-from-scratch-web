"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { lessons } from "@/lib/lessons";
import { loadProgress } from "@/lib/progress";
import { LessonCard } from "@/components/lesson-card";
import { ProgressMeter } from "@/components/progress-meter";
export default function Learn() {
  const [completed,setCompleted] = useState<string[]>([]);
  useEffect(()=>{setCompleted(loadProgress()); const f=()=>setCompleted(loadProgress());window.addEventListener("ai-progress-changed",f);return ()=>window.removeEventListener("ai-progress-changed",f);},[]);
  return <><section className="page-intro learn-intro"><div className="container"><span className="overline">THE LEARNING JOURNEY / EST. RIGHT NOW ✳</span><h1>One little step.<br/><em>One big aha!</em></h1><p>Start at chapter one, or jump into whatever makes you curious. There&apos;s no wrong way to learn.</p><ProgressMeter total={3}/></div></section><section className="learn-list-section"><div className="container"><div className="section-eyebrow"><span>YOUR CHAPTERS</span><span>03 AVAILABLE · 01 ON THE WAY</span></div><div className="lesson-grid">{lessons.map(lesson=><LessonCard lesson={lesson} key={lesson.slug} complete={completed.includes(lesson.slug)}/>)}</div><div className="learn-end"><Sparkles size={22}/><div><strong>A tiny reminder:</strong><p>You don&apos;t have to understand everything on the first try. Every experiment counts.</p></div><Link href="/playground">Go experiment <ArrowRight size={16}/></Link></div></div></section></>;
}
