import {Task, TaskFormValues, TaskStatusFilter} from '../types/task';

export const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Prepare project structure',
    description: 'Create a clear and simple folder structure for the app',
    completed: true,
    createdAt: '2026-06-22T09:00:00.000Z',
  },
  {
    id: '2',
    title: 'Build task list screen',
    description: 'Show tasks with completion state and action buttons',
    completed: false,
    createdAt: '2026-06-22T10:15:00.000Z',
  },
];

export function createTask(values: TaskFormValues): Task {
  return {
    id: `${Date.now()}`,
    title: values.title.trim(),
    description: values.description.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  };
}

export function getFilteredTasks(
  tasks: Task[],
  searchQuery: string,
  statusFilter: TaskStatusFilter,
): Task[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return tasks.filter(task => {
    const matchesSearch =
      normalizedQuery.length === 0 ||
      task.title.toLowerCase().includes(normalizedQuery);

    const matchesStatus =
      statusFilter === 'all' ||
      (statusFilter === 'completed' && task.completed) ||
      (statusFilter === 'pending' && !task.completed);

    return matchesSearch && matchesStatus;
  });
}

export function formatTaskDate(date: string): string {
  return new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}
