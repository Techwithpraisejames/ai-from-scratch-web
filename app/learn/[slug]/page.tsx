import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { lessons, getLesson } from "@/lib/lessons";
import { LessonExperience } from "@/components/lesson-experience";
export function generateStaticParams(){return lessons.filter(x=>x.status==="available").map(x=>({slug:x.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const lesson=getLesson(slug);return {title:lesson?.title||"Lesson",description:lesson?.description};}
export default async function LessonPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const lesson=getLesson(slug);if(!lesson||lesson.status!=="available")notFound();return <LessonExperience lesson={lesson}/>;}
