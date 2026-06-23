import React from 'react';
import {Modal, Pressable, Text, View} from 'react-native';

import {styles} from '../styles/components/TaskDetailsModalStyles';
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
