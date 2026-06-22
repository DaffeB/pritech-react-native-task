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
    borderRadius: 20,
    marginBottom: 12,
    padding: 20,
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
    marginBottom: 10,
  },
  title: {
    color: '#0f172a',
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    marginRight: 12,
  },
  titleCompleted: {
    color: '#98a2b3',
    textDecorationLine: 'line-through',
  },
  badge: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  badgeCompleted: {
    backgroundColor: '#e8fbf1',
  },
  badgePending: {
    backgroundColor: '#eef4ff',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
  },
  badgeTextCompleted: {
    color: '#027a48',
  },
  badgeTextPending: {
    color: '#1d4ed8',
  },
  description: {
    color: '#475569',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 16,
  },
  footerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateText: {
    color: '#94a3b8',
    fontSize: 12,
    fontWeight: '500',
  },
  openHint: {
    color: '#64748b',
    fontSize: 12,
    fontWeight: '500',
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  actionButton: {
    alignItems: 'center',
    borderRadius: 14,
    flex: 1,
    paddingVertical: 13,
  },
  secondaryButton: {
    backgroundColor: '#f8fafc',
  },
  secondaryButtonText: {
    color: '#334155',
    fontSize: 14,
    fontWeight: '600',
  },
  deleteButton: {
    backgroundColor: '#fef2f2',
  },
  deleteButtonText: {
    color: '#d92d20',
    fontSize: 14,
    fontWeight: '700',
  },
});
