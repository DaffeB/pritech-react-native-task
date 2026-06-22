import React, {useMemo, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import {AppHeader} from './src/components/AppHeader';
import {useStoredTasks} from './src/hooks/useStoredTasks';
import {AddTaskScreen} from './src/screens/AddTaskScreen';
import {TaskDetailsScreen} from './src/screens/TaskDetailsScreen';
import {TasksScreen} from './src/screens/TasksScreen';
import {Screen} from './src/types/navigation';
import {Task, TaskFormValues, TaskStatusFilter} from './src/types/task';
import {createTask, getFilteredTasks} from './src/utils/tasks';

function App(): React.JSX.Element {
  const {tasks, setTasks} = useStoredTasks();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<TaskStatusFilter>('all');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [activeScreen, setActiveScreen] = useState<Screen>('tasks');

  const filteredTasks = useMemo(
    () => getFilteredTasks(tasks, searchQuery, statusFilter),
    [searchQuery, statusFilter, tasks],
  );

  const completedCount = tasks.filter(task => task.completed).length;

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
      <StatusBar barStyle="light-content" backgroundColor="#102a43" />
      <AppHeader activeScreen={activeScreen} onChangeScreen={setActiveScreen} />
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
    backgroundColor: '#f8fbff',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 52,
  },
});

export default App;
