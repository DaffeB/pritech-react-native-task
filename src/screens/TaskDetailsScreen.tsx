import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {ScreenIntro} from '../components/ScreenIntro';
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
      <ScreenIntro eyebrow="DETAILS" subtitle={task.description} title={task.title} />

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
    gap: 18,
  },
  emptyScreen: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 22,
  },
  emptyScreenTitle: {
    color: '#16213e',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  emptyScreenText: {
    color: '#667085',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
  },
  detailsCard: {
    backgroundColor: '#eaf5ef',
    borderRadius: 14,
    padding: 18,
  },
  detailRow: {
    gap: 6,
  },
  separator: {
    backgroundColor: '#cfe3d7',
    height: 1,
    marginVertical: 16,
  },
  detailsLabel: {
    color: '#1f7a5c',
    fontSize: 11,
    fontWeight: '600',
  },
  detailsValue: {
    color: '#0f172a',
    fontSize: 14,
    lineHeight: 20,
  },
  detailsActions: {
    gap: 10,
  },
  detailsButton: {
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 13,
  },
  actionPrimary: {
    backgroundColor: '#102a43',
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
    fontSize: 13,
    fontWeight: '600',
  },
});
