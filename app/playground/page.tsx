"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Dices, FlaskConical, Info, RefreshCcw, Sparkles } from "lucide-react";
import { SpamLab } from "@/components/spam-lab";
const logits = [2.3, 1.65, 0.85, 0.3];
const tokens = ["exciting", "changing", "complex", "uncertain"];
export default function Playground() {
  const [temperature, setTemperature] = useState(1);
  const [sample, setSample] = useState<string | null>(null);
  const [pickCount, setPickCount] = useState(0);
  const probabilities = useMemo(() => {
    const scaled = logits.map(x => Math.exp(x / temperature));
    const total = scaled.reduce((a,b) => a + b,0);
    return scaled.map(x => x / total);
  },[temperature]);
  function generate() {
    let roll = Math.random();
    const ix = probabilities.findIndex(p => (roll -= p) <= 0);
    setSample(tokens[ix < 0 ? 3 : ix]);setPickCount(c=>c+1);
  }
  return <><section className="page-intro playground-intro"><div className="container"><span className="overline">EXPERIMENT ZONE / ALL CURIOSITY WELCOME</span><h1>Go ahead.<br/><em>Touch everything.</em></h1><p>No installations. No complicated setup. Just real concepts you can poke, tweak, and understand.</p></div></section><section className="playground-content"><div className="container playground-stack"><div className="experiment-heading"><span>EXPERIMENT 01</span><h2>Make your own spam rule</h2><p>A simple rule-based system does exactly what you tell it to do. Try a few keywords and see which emails get flagged.</p></div><div className="experiment-shell"><SpamLab /></div><div className="experiment-heading second"><span>EXPERIMENT 02</span><h2>Make a language model take a chance</h2><p>Explore how temperature changes the probability of different next tokens. This simulation uses fixed example scores, so it runs instantly on your phone.</p></div><div className="temperature-lab"><div className="temperature-left"><div className="lab-topline"><span><span className="live-dot" /> INTERACTIVE SIMULATION</span><span>002 / TOKENS</span></div><div className="prompt-label">COMPLETE THIS PROMPT</div><div className="prompt-box">The future of AI is <span>{sample ? sample : "..."}</span></div><div className="temperature-slider-label"><label htmlFor="temp-slider">Temperature</label><strong>{temperature.toFixed(1)}</strong></div><input id="temp-slider" type="range" min="0.2" max="2" step="0.1" value={temperature} onChange={e=>{setTemperature(Number(e.target.value));setSample(null);}}/><div className="temperature-range"><span>More predictable</span><span>More varied</span></div><button className="button button-dark sample-button" type="button" onClick={generate}><Dices size={18}/> Sample a token</button><button className="reset-inline" type="button" onClick={()=>{setTemperature(1);setSample(null);setPickCount(0);}}><RefreshCcw size={14}/> Reset experiment</button></div><div className="temperature-right"><span className="prob-heading">POSSIBLE NEXT TOKENS <span>PROBABILITY</span></span>{tokens.map((token,i)=><div className="prob-row" key={token}><div className="prob-row-meta"><strong>{token}</strong><span>{(probabilities[i]*100).toFixed(1)}%</span></div><div className="prob-track"><div style={{width:`${probabilities[i]*100}%`}}/></div></div>)}<div className="model-explainer"><Info size={18}/><p>Lower temperature concentrates probability on the highest-scoring choices. Higher temperature spreads probability across more options.</p></div>{pickCount>0&&<div className="model-draw"><Sparkles size={16}/> You&apos;ve sampled {pickCount} {pickCount===1?"time":"times"}. Try a different temperature!</div>}</div></div><div className="playground-next"><FlaskConical size={25}/><div><strong>More experiments are on the way.</strong><p>We&apos;re building new little labs as the course grows.</p></div><Link href="/learn">Browse lessons <ArrowRight size={17}/></Link></div></div></section></>;
}
