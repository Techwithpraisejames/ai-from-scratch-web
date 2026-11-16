import Link from "next/link";
import { ArrowUpRight, CheckCircle2, LockKeyhole } from "lucide-react";
import { Lesson } from "@/lib/lessons";
import { LessonIcon } from "./icons";
export function LessonCard({ lesson, complete = false }: { lesson: Lesson; complete?: boolean }) {
  const content = <><div className="lesson-card-meta"><span>CHAPTER {String(lesson.index).padStart(2, "0")}</span><span>{lesson.status === "available" ? lesson.duration : "COMING SOON"}</span></div><div className={`lesson-card-visual color-${lesson.color}`}><span className="visual-orbit"/><LessonIcon index={lesson.index} size={56}/><span className="visual-mini-star">✳</span></div><div className="lesson-card-body"><span className="lesson-card-eyebrow">{lesson.eyebrow}</span><h3>{lesson.title}</h3><p>{lesson.description}</p><div className="lesson-card-bottom"><span>{complete ? <><CheckCircle2 size={17}/> Completed</> : lesson.status === "available" ? "Explore lesson" : <><LockKeyhole size={15}/> On the way</>}</span>{lesson.status === "available" && <ArrowUpRight size={19}/>}</div></div></>;
  return lesson.status === "available" ? <Link className="lesson-card" href={`/learn/${lesson.slug}`}>{content}</Link> : <article className="lesson-card lesson-upcoming">{content}</article>;
}
