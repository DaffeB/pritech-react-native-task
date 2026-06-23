import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {ScreenIntro} from '../components/ScreenIntro';
import {styles} from '../styles/screens/TaskDetailsScreenStyles';
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
          Open a task from the list to see its details
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
