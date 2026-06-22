import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
          Add a new task or adjust the current search and filter.
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

const styles = StyleSheet.create({
  emptyState: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#e4e7ec',
    borderRadius: 16,
    borderWidth: 1,
    padding: 24,
  },
  emptyStateTitle: {
    color: '#16213e',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  emptyStateText: {
    color: '#667085',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
});
