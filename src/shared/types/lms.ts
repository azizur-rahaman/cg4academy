export interface Institution {
  id: string;
  name: string;
  logo?: string;
}

export interface Course {
  id: string;
  institutionId: string;
  title: string;
  description: string;
  thumbnail?: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  title: string;
  order: number;
  content: TopicContent;
}

export interface TopicContent {
  understand: {
    title: string;
    content: string;
    resources?: Resource[];
  };
  practice: {
    title: string;
    exercises: Exercise[];
  };
  master: {
    title: string;
    projects: Project[];
  };
}

export interface Resource {
  id: string;
  title: string;
  type: 'video' | 'article' | 'reading';
  url?: string;
  content?: string;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  requirements: string[];
}
