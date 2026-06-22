import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {Task} from '../types/task';
import {formatTaskDate} from '../utils/tasks';

type TaskItemProps = {
  task: Task;
  onDelete: () => void;
  onOpen: () => void;
  onToggle: () => void;
};

export function TaskItem({task, onDelete, onOpen, onToggle}: TaskItemProps) {
  return (
    <Pressable style={styles.card} onPress={onOpen}>
      <View style={styles.row}>
        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text style={[styles.title, task.completed && styles.titleCompleted]}>
              {task.title}
            </Text>
            <View
              style={[
                styles.badge,
                task.completed ? styles.badgeCompleted : styles.badgePending,
              ]}>
              <Text
                style={[
                  styles.badgeText,
                  task.completed
                    ? styles.badgeTextCompleted
                    : styles.badgeTextPending,
                ]}>
                {task.completed ? 'Completed' : 'Pending'}
              </Text>
            </View>
          </View>

          <Text style={styles.description} numberOfLines={2}>
            {task.description}
          </Text>

          <View style={styles.footerRow}>
            <Text style={styles.dateText}>{formatTaskDate(task.createdAt)}</Text>
            <Text style={styles.openHint}>Details</Text>
          </View>
        </View>
      </View>

      <View style={styles.actionsRow}>
        <Pressable
          style={[styles.actionButton, styles.secondaryButton]}
          onPress={onToggle}>
          <Text style={styles.secondaryButtonText}>
            {task.completed ? 'Mark pending' : 'Mark done'}
          </Text>
        </Pressable>

        <Pressable style={[styles.actionButton, styles.deleteButton]} onPress={onDelete}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    marginBottom: 12,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
  },
  titleRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    color: '#0f172a',
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    marginRight: 12,
  },
  titleCompleted: {
    color: '#98a2b3',
    textDecorationLine: 'line-through',
  },
  badge: {
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 4,
  },
  badgeCompleted: {
    backgroundColor: '#eaf5ef',
  },
  badgePending: {
    backgroundColor: '#eef4fb',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
  },
  badgeTextCompleted: {
    color: '#1f7a5c',
  },
  badgeTextPending: {
    color: '#102a43',
  },
  description: {
    color: '#475569',
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 14,
  },
  footerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateText: {
    color: '#94a3b8',
    fontSize: 11,
    fontWeight: '500',
  },
  openHint: {
    color: '#2f6f8f',
    fontSize: 11,
    fontWeight: '500',
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },
  actionButton: {
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
    paddingVertical: 11,
  },
  secondaryButton: {
    backgroundColor: '#eaf5ef',
  },
  secondaryButtonText: {
    color: '#1f7a5c',
    fontSize: 13,
    fontWeight: '600',
  },
  deleteButton: {
    backgroundColor: '#fff5f5',
  },
  deleteButtonText: {
    color: '#d92d20',
    fontSize: 13,
    fontWeight: '600',
  },
});
