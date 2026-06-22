export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
};

export type TaskFormValues = {
  title: string;
  description: string;
};

export type TaskStatusFilter = 'all' | 'completed' | 'pending';
