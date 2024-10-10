import { IconCloud } from "./ui/floating-icons";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-full md:max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-10 pb-10 pt-4 md:px-20 md:pb-20 md:pt-8 dark:bg-black">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

