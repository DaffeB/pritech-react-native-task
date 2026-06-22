import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {SuggestionCard} from '../components/SuggestionCard';
import {TaskForm} from '../components/TaskForm';
import {TaskFormValues} from '../types/task';

type AddTaskScreenProps = {
  onAddTask: (values: TaskFormValues) => void;
};

export function AddTaskScreen({onAddTask}: AddTaskScreenProps) {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>NEW TASK</Text>
        <Text style={styles.title}>Add a task</Text>
        <Text style={styles.subtitle}>
          Write a short title and description, or use the API suggestion below.
        </Text>
      </View>

      <TaskForm onSubmit={onAddTask} />
      <SuggestionCard onAddTask={onAddTask} />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 28,
  },
  eyebrow: {
    color: '#94a3b8',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.1,
    marginBottom: 10,
  },
  title: {
    color: '#0f172a',
    fontSize: 34,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    color: '#64748b',
    fontSize: 16,
    lineHeight: 26,
  },
});
