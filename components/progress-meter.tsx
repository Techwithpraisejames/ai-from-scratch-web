"use client";
import { useEffect, useState } from "react";
import { loadProgress } from "@/lib/progress";
export function ProgressMeter({ total = 3 }: { total?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => { const refresh = () => setCount(loadProgress().length); refresh(); window.addEventListener("ai-progress-changed", refresh); return () => window.removeEventListener("ai-progress-changed", refresh); }, []);
  return <div className="progress-meter"><div className="progress-top"><span>YOUR ADVENTURE SO FAR</span><strong>{Math.min(count, total)} / {total} completed</strong></div><div className="progress-track"><div style={{ width: `${Math.min(count / total, 1) * 100}%` }} /></div><p>Every small step counts. Pick up wherever you left off.</p></div>;
}
