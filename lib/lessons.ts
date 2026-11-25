export type Lesson = {
  slug: string;
  index: number;
  eyebrow: string;
  title: string;
  description: string;
  duration: string;
  color: "pink" | "lilac" | "yellow" | "mint";
  video?: string;
  status: "available" | "coming-soon";
  objective: string;
};

export const lessons: Lesson[] = [
  {
    index: 1,
    slug: "ai-vs-ml-vs-dl",
    eyebrow: "START HERE",
    title: "AI, ML & Deep Learning",
    description: "Meet the three big ideas. Learn how they connect and what actually makes a system intelligent.",
    duration: "8 min",
    color: "pink",
    status: "available",
    video: "1YDNWFDSLgU",
    objective: "Tell AI, machine learning, and deep learning apart using real examples.",
  },
  {
    index: 2,
    slug: "how-machines-learn",
    eyebrow: "THE TRAINING ROOM",
    title: "How machines learn",
    description: "Train your intuition for patterns, labels, and predictions with a tiny email classifier.",
    duration: "10 min",
    color: "lilac",
    status: "available",
    video: "bJuibUsvf2s",
    objective: "Understand how training data becomes a model that can make predictions.",
  },
  {
    index: 3,
    slug: "how-llms-work",
    eyebrow: "BEHIND THE CHAT",
    title: "How language models work",
    description: "Take a look behind the text box. Experiment with tokens, probability, and temperature.",
    duration: "12 min",
    color: "yellow",
    status: "available",
    video: "2D8bazmxERg",
    objective: "Explain how an LLM uses tokens and probabilities to generate text.",
  },
  {
    index: 4,
    slug: "prompt-engineering",
    eyebrow: "THE PROMPT LAB",
    title: "Prompt Engineering Explained",
    description: "Explore zero-shot and few-shot prompting, structured outputs, and a real Python experiment with 50 support tickets.",
    duration: "14 min video",
    color: "mint",
    status: "available",
    video: "zyeF_r8LdiI",
    objective: "Design prompts, understand the major prompting techniques, and evaluate model responses.",
  },
  {
    index: 5,
    slug: "neural-networks-backpropagation",
    eyebrow: "NEXT UP",
    title: "Neural networks & backpropagation",
    description: "What happens when a network gets a prediction wrong? Find out how it learns from errors.",
    duration: "Coming soon",
    color: "mint",
    status: "coming-soon",
    objective: "Discover the roles of the forward pass, loss, gradients, and parameter updates.",
  },
];

export function getLesson(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}
