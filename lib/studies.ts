import { profile } from "@/data/profile";

/** URL do repositório de um estudo (usuário do GitHub vem de data/profile.ts). */
export const repoUrl = (repo: string) => `${profile.github}/${repo}`;
