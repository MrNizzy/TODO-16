export enum Priority {
  Low = 1,
  Medium = 2,
  High = 3,
}

export interface Task {
  id: number;
  title: string;
  limitDate: string;
  completed: boolean;
  priority: Priority;
  persons: Person[];
}

export interface Person {
  name: string;
  age: number;
  skills: Skill[];
}

export interface Skill {
  name: string;
}
