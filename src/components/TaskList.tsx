import React from 'react';
import {Text, View} from 'react-native';

import {styles} from '../styles/components/TaskListStyles';
import {Task} from '../types/task';
import {TaskItem} from './TaskItem';

type TaskListProps = {
  tasks: Task[];
  onDeleteTask: (taskId: string) => void;
  onOpenTask: (task: Task) => void;
  onToggleTask: (taskId: string) => void;
};

export function TaskList({
  tasks,
  onDeleteTask,
  onOpenTask,
  onToggleTask,
}: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <View style={styles.emptyState}>
        <Text style={styles.emptyStateTitle}>No tasks found</Text>
        <Text style={styles.emptyStateText}>
          Add a new task or adjust the current search and filter
        </Text>
      </View>
    );
  }

  return (
    <View>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => onDeleteTask(task.id)}
          onOpen={() => onOpenTask(task)}
          onToggle={() => onToggleTask(task.id)}
        />
      ))}
    </View>
  );
}
