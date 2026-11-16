import { BrainCircuit, Network, MessagesSquare, Sparkles } from "lucide-react";
export function LessonIcon({ index, size = 32 }: { index: number; size?: number }) {
  if (index === 1) return <BrainCircuit size={size} strokeWidth={1.6} aria-hidden="true" />;
  if (index === 2) return <Network size={size} strokeWidth={1.6} aria-hidden="true" />;
  if (index === 3) return <MessagesSquare size={size} strokeWidth={1.6} aria-hidden="true" />;
  return <Sparkles size={size} strokeWidth={1.6} aria-hidden="true" />;
}
