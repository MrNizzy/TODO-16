import { Task } from '@interfaces/todo.interface';

export const taskData: Task[] = [
  {
    id: 1,
    title: 'Tarea A',
    limitDate: '2024-09-31',
    completed: false,
    priority: 1,
    persons: [
      {
        name: 'Persona A',
        age: 20,
        skills: [
          {
            name: 'Skill A',
          },
          {
            name: 'Skill B',
          },
        ],
      },
      {
        name: 'Persona B',
        age: 30,
        skills: [
          {
            name: 'Skill C',
          },
          {
            name: 'Skill D',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Tarea B',
    limitDate: '2024-09-31',
    completed: true,
    priority: 2,
    persons: [
      {
        name: 'Persona C',
        age: 40,
        skills: [
          {
            name: 'Skill E',
          },
          {
            name: 'Skill F',
          },
        ],
      },
      {
        name: 'Persona D',
        age: 50,
        skills: [
          {
            name: 'Skill G',
          },
          {
            name: 'Skill H',
          },
        ],
      },
    ],
  },
];
