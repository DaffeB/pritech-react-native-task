import React from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';

import {Task} from '../types/task';
import {formatTaskDate} from '../utils/tasks';

type TaskDetailsModalProps = {
  task: Task | null;
  visible: boolean;
  onClose: () => void;
};

export function TaskDetailsModal({
  task,
  visible,
  onClose,
}: TaskDetailsModalProps) {
  if (!task) {
    return null;
  }

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalCard}>
          <Text style={styles.heading}>Task details</Text>
          <Text style={styles.label}>Title</Text>
          <Text style={styles.value}>{task.title}</Text>

          <Text style={styles.label}>Description</Text>
          <Text style={styles.value}>{task.description}</Text>

          <Text style={styles.label}>Status</Text>
          <Text style={styles.value}>
            {task.completed ? 'Completed' : 'Pending'}
          </Text>

          <Text style={styles.label}>Created date</Text>
          <Text style={styles.value}>{formatTaskDate(task.createdAt)}</Text>

          <Pressable style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.45)',
    justifyContent: 'flex-end',
  },
  modalCard: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
  },
  heading: {
    color: '#16213e',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },
  label: {
    color: '#667085',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 4,
    marginTop: 12,
    textTransform: 'uppercase',
  },
  value: {
    color: '#16213e',
    fontSize: 16,
    lineHeight: 22,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1d4ed8',
    borderRadius: 12,
    marginTop: 24,
    paddingVertical: 14,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
});
