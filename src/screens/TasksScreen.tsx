import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {FilterBar} from '../components/FilterBar';
import {ScreenIntro} from '../components/ScreenIntro';
import {TaskList} from '../components/TaskList';
import {Task, TaskStatusFilter} from '../types/task';

type TasksScreenProps = {
  completedCount: number;
  searchQuery: string;
  statusFilter: TaskStatusFilter;
  tasks: Task[];
  totalCount: number;
  onDeleteTask: (taskId: string) => void;
  onFilterChange: (value: TaskStatusFilter) => void;
  onOpenTask: (task: Task) => void;
  onSearchChange: (value: string) => void;
  onToggleTask: (taskId: string) => void;
};

export function TasksScreen({
  completedCount,
  searchQuery,
  statusFilter,
  tasks,
  totalCount,
  onDeleteTask,
  onFilterChange,
  onOpenTask,
  onSearchChange,
  onToggleTask,
}: TasksScreenProps) {
  return (
    <>
      <ScreenIntro
        eyebrow="OVERVIEW"
        subtitle="Keep everything focused, simple, and easy to scan."
        title="Your tasks"
      />

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{totalCount}</Text>
          <Text style={styles.statLabel}>Total tasks</Text>
        </View>
        <View style={[styles.statCard, styles.statCardAccent]}>
          <Text style={styles.statValue}>{completedCount}</Text>
          <Text style={styles.statLabel}>Completed</Text>
        </View>
      </View>

      <FilterBar
        searchQuery={searchQuery}
        selectedFilter={statusFilter}
        onSearchChange={onSearchChange}
        onFilterChange={onFilterChange}
      />

      <TaskList
        tasks={tasks}
        onDeleteTask={onDeleteTask}
        onOpenTask={onOpenTask}
        onToggleTask={onToggleTask}
      />
    </>
  );
}

const styles = StyleSheet.create({
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 26,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#102a43',
    borderRadius: 14,
    padding: 16,
  },
  statCardAccent: {
    backgroundColor: '#1f7a5c',
  },
  statValue: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  statLabel: {
    color: '#d9e2ec',
    fontSize: 12,
    fontWeight: '500',
  },
});
