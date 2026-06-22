import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {Task} from '../types/task';

type TaskDetailsScreenProps = {
  task: Task | null;
  onDeleteTask: (taskId: string) => void;
  onToggleTask: (taskId: string) => void;
};

export function TaskDetailsScreen({
  task,
  onDeleteTask,
  onToggleTask,
}: TaskDetailsScreenProps) {
  if (!task) {
    return (
      <View style={styles.emptyScreen}>
        <Text style={styles.emptyScreenTitle}>No task selected</Text>
        <Text style={styles.emptyScreenText}>
          Open a task from the list to see its details.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>DETAILS</Text>
        <Text style={styles.heroTitle}>{task.title}</Text>
        <Text style={styles.heroDescription}>{task.description}</Text>
      </View>

      <View style={styles.detailsCard}>
        <View style={styles.detailRow}>
          <Text style={styles.detailsLabel}>Status</Text>
          <Text style={styles.detailsValue}>
            {task.completed ? 'Completed' : 'Pending'}
          </Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.detailRow}>
          <Text style={styles.detailsLabel}>Created</Text>
          <Text style={styles.detailsValue}>{task.createdAt.slice(0, 10)}</Text>
        </View>
      </View>

      <View style={styles.detailsActions}>
        <Pressable
          style={[styles.actionPrimary, styles.detailsButton]}
          onPress={() => onToggleTask(task.id)}>
          <Text style={styles.actionPrimaryText}>
            {task.completed ? 'Mark pending' : 'Mark done'}
          </Text>
        </Pressable>
        <Pressable
          style={[styles.actionDanger, styles.detailsButton]}
          onPress={() => onDeleteTask(task.id)}>
          <Text style={styles.actionDangerText}>Delete task</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 24,
  },
  emptyScreen: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
  },
  emptyScreenTitle: {
    color: '#16213e',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  emptyScreenText: {
    color: '#667085',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
  },
  header: {
    paddingTop: 4,
  },
  eyebrow: {
    color: '#94a3b8',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.1,
    marginBottom: 10,
  },
  heroTitle: {
    color: '#0f172a',
    fontSize: 34,
    fontWeight: '700',
    lineHeight: 40,
    marginBottom: 10,
  },
  heroDescription: {
    color: '#64748b',
    fontSize: 16,
    lineHeight: 26,
  },
  detailsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
  },
  detailRow: {
    gap: 6,
  },
  separator: {
    backgroundColor: '#e2e8f0',
    height: 1,
    marginVertical: 18,
  },
  detailsLabel: {
    color: '#94a3b8',
    fontSize: 12,
    fontWeight: '600',
  },
  detailsValue: {
    color: '#0f172a',
    fontSize: 16,
    lineHeight: 22,
  },
  detailsActions: {
    gap: 12,
  },
  detailsButton: {
    alignItems: 'center',
    borderRadius: 14,
    paddingVertical: 15,
  },
  actionPrimary: {
    backgroundColor: '#0f172a',
  },
  actionPrimaryText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  actionDanger: {
    backgroundColor: '#ffffff',
  },
  actionDangerText: {
    color: '#d92d20',
    fontSize: 14,
    fontWeight: '600',
  },
});
