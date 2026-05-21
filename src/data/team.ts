export type Person = {
  name: string;
  description: string;
};

export const people: Person[] = [
  {
    name: 'Konrad Gwiazda',
    description: 'The hands behind OneLauncher/OneClient, development lead',
  },
  {
    name: 'Julian Chang',
    description: 'The mind behind everything product, design, and marketing',
  },
];

export const advisors: Person[] = [
  {
    name: 'Kevin Wang',
    description: 'Founder / CEO of FOSSA',
  },
  {
    name: 'Harry Willetts',
    description: 'Former lead developer of OneConfig',
  },
  {
    name: 'Caledonian',
    description: 'Former lead designer of Polyfrost',
  },
];
