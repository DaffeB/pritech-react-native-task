import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {styles} from '../styles/components/TaskItemStyles';
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
