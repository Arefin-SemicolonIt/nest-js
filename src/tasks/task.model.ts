export interface Task {
  id: string;
  title: string;
  description:string;
  status: TaskSatus;
}

export enum TaskSatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE'
}