"use client";
import { useState } from "react";
import { Check, RefreshCcw, SlidersHorizontal, Sparkles } from "lucide-react";
const emails = [
  { from: "Lucky Rewards", subject: "Claim your FREE prize today", originalSpam: true },
  { from: "Your study buddy", subject: "Meeting moved to Friday", originalSpam: false },
  { from: "Trial updates", subject: "Your free trial is ready", originalSpam: false },
  { from: "Competition desk", subject: "You won a prize!", originalSpam: true },
];
const choices = ["free", "prize", "meeting"];
export function SpamLab({ compact = false }: { compact?: boolean }) {
  const [rule, setRule] = useState("free");
  const [discovered, setDiscovered] = useState(false);
  const flagged = emails.filter(email => email.subject.toLowerCase().includes(rule)).length;
  return <div className={`spam-lab ${compact ? "spam-lab-compact" : ""}`}>
    <div className="lab-topline"><span><span className="live-dot" /> LIVE MINI LAB</span><span className="lab-topline-right"><SlidersHorizontal size={14} /> RULE ENGINE / 001</span></div>
    <div className="lab-heading"><div><h3>Can you spot the spam?</h3><p>Change the rule. Watch the inbox react.</p></div><span className="lab-sticker" aria-hidden="true">✳</span></div>
    <div className="rule-label">FLAG AN EMAIL WHEN IT CONTAINS...</div>
    <div className="rule-switcher" role="group" aria-label="Choose a spam-filter keyword">{choices.map(word => <button key={word} type="button" aria-pressed={rule === word} className={rule === word ? "active" : ""} onClick={() => { setRule(word); setDiscovered(true); }}>{word}</button>)}</div>
    <div className="email-list">{emails.slice(0, compact ? 3 : 4).map((email, i) => { const spam = email.subject.toLowerCase().includes(rule); return <div className="email-row" key={i}><div className="email-icon">{email.from.charAt(0)}</div><div className="email-info"><strong>{email.from}</strong><span>{email.subject}</span></div><span className={`email-result ${spam ? "result-spam" : "result-clear"}`}>{spam ? "FLAGGED" : "CLEAR"}</span></div> })}</div>
    <div className="lab-status"><span><Check size={15} /> {flagged} of 4 emails flagged</span><button aria-label="Reset spam filter" type="button" onClick={() => { setRule("free"); setDiscovered(false); }}><RefreshCcw size={15} /> Reset</button></div>
    {discovered && <div className="lab-insight"><Sparkles size={18} /><div><strong>Little discovery!</strong><p>A rule-based system follows instructions you write. It doesn't learn from examples. You'll meet a trained classifier in lesson 2.</p></div></div>}
  </div>;
}
