import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useMemo, useState} from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {AddTaskScreen} from './src/screens/AddTaskScreen';
import {TaskDetailsScreen} from './src/screens/TaskDetailsScreen';
import {TasksScreen} from './src/screens/TasksScreen';
import {Task, TaskFormValues, TaskStatusFilter} from './src/types/task';
import {createTask, getFilteredTasks, initialTasks} from './src/utils/tasks';

type Screen = 'tasks' | 'add' | 'details';
const TASKS_STORAGE_KEY = 'pritech.tasks';

function App(): React.JSX.Element {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<TaskStatusFilter>('all');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [activeScreen, setActiveScreen] = useState<Screen>('tasks');
  const [hasLoadedTasks, setHasLoadedTasks] = useState(false);

  const filteredTasks = useMemo(
    () => getFilteredTasks(tasks, searchQuery, statusFilter),
    [searchQuery, statusFilter, tasks],
  );

  const completedCount = tasks.filter(task => task.completed).length;

  useEffect(() => {
    async function loadStoredTasks() {
      try {
        const storedTasks = await AsyncStorage.getItem(TASKS_STORAGE_KEY);

        if (storedTasks) {
          setTasks(JSON.parse(storedTasks) as Task[]);
        }
      } catch {

      } finally {
        setHasLoadedTasks(true);
      }
    }

    loadStoredTasks();
  }, []);

  useEffect(() => {
    if (!hasLoadedTasks) {
      return;
    }

    AsyncStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks)).catch(() => {
    });
  }, [hasLoadedTasks, tasks]);

  const handleAddTask = (values: TaskFormValues) => {
    const newTask = createTask(values);

    setTasks(currentTasks => [newTask, ...currentTasks]);
    setActiveScreen('tasks');
  };

  const handleToggleTask = (taskId: string) => {
    setTasks(currentTasks =>
      currentTasks.map(task =>
        task.id === taskId ? {...task, completed: !task.completed} : task,
      ),
    );

    setSelectedTask(currentTask =>
      currentTask && currentTask.id === taskId
        ? {...currentTask, completed: !currentTask.completed}
        : currentTask,
    );
  };

  const handleDeleteTask = (taskId: string) => {
    Alert.alert('Delete task', 'Are you sure you want to delete this task?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          setTasks(currentTasks =>
            currentTasks.filter(task => task.id !== taskId),
          );

          setSelectedTask(currentTask =>
            currentTask?.id === taskId ? null : currentTask,
          );

          if (selectedTask?.id === taskId) {
            setActiveScreen('tasks');
          }
        },
      },
    ]);
  };

  const handleOpenTask = (task: Task) => {
    setSelectedTask(task);
    setActiveScreen('details');
  };

  const renderScreen = () => {
    if (activeScreen === 'add') {
      return <AddTaskScreen onAddTask={handleAddTask} />;
    }

    if (activeScreen === 'details') {
      return (
        <TaskDetailsScreen
          task={selectedTask}
          onDeleteTask={handleDeleteTask}
          onToggleTask={handleToggleTask}
        />
      );
    }

    return (
      <TasksScreen
        completedCount={completedCount}
        searchQuery={searchQuery}
        statusFilter={statusFilter}
        tasks={filteredTasks}
        totalCount={tasks.length}
        onDeleteTask={handleDeleteTask}
        onFilterChange={setStatusFilter}
        onOpenTask={handleOpenTask}
        onSearchChange={setSearchQuery}
        onToggleTask={handleToggleTask}
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />
      <View style={styles.topBar}>
        <View style={styles.brandBlock}>
          <Text style={styles.brandEyebrow}>PRITECH</Text>
          <Text style={styles.brandTitle}>Simple Tasks</Text>
        </View>
        <View style={styles.tabRow}>
          <Pressable
            style={[
              styles.topBarButton,
              activeScreen === 'tasks' && styles.topBarButtonActive,
            ]}
            onPress={() => setActiveScreen('tasks')}>
            <Text
              style={[
                styles.topBarButtonText,
                activeScreen === 'tasks' && styles.topBarButtonTextActive,
              ]}>
              Tasks
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.topBarButton,
              activeScreen === 'add' && styles.topBarButtonActive,
            ]}
            onPress={() => setActiveScreen('add')}>
            <Text
              style={[
                styles.topBarButtonText,
                activeScreen === 'add' && styles.topBarButtonTextActive,
              ]}>
              Add Task
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.topBarButton,
              activeScreen === 'details' && styles.topBarButtonActive,
            ]}
            onPress={() => setActiveScreen('details')}>
            <Text
              style={[
                styles.topBarButtonText,
                activeScreen === 'details' && styles.topBarButtonTextActive,
              ]}>
              Details
            </Text>
          </Pressable>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        {renderScreen()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  topBar: {
    backgroundColor: '#f8fafc',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 8,
  },
  brandBlock: {
    marginBottom: 18,
  },
  brandEyebrow: {
    color: '#94a3b8',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  brandTitle: {
    color: '#0f172a',
    fontSize: 28,
    fontWeight: '700',
  },
  tabRow: {
    flexDirection: 'row',
    gap: 10,
  },
  topBarButton: {
    borderRadius: 999,
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  topBarButtonActive: {
    backgroundColor: '#ffffff',
  },
  topBarButtonText: {
    color: '#94a3b8',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  topBarButtonTextActive: {
    color: '#0f172a',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 48,
  },
});

export default App;
