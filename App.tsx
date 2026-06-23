import React, {useMemo, useState} from 'react';
import {Alert, ScrollView, StatusBar, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {AppHeader} from './src/components/AppHeader';
import {useStoredTasks} from './src/hooks/useStoredTasks';
import {AddTaskScreen} from './src/screens/AddTaskScreen';
import {TaskDetailsScreen} from './src/screens/TaskDetailsScreen';
import {TasksScreen} from './src/screens/TasksScreen';
import {styles} from './src/styles/AppStyles';
import {Screen} from './src/types/navigation';
import {Task, TaskFormValues, TaskStatusFilter} from './src/types/task';
import {createTask, getFilteredTasks} from './src/utils/tasks';

function App(): React.JSX.Element {
  const {isHydrated, tasks, setTasks} = useStoredTasks();
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
    <SafeAreaProvider>
      <SafeAreaView edges={['top']} style={styles.topSafeArea}>
        <StatusBar barStyle="light-content" backgroundColor="#102a43" />
        <AppHeader
          activeScreen={activeScreen}
          canOpenDetails={selectedTask !== null}
          onChangeScreen={setActiveScreen}
        />
      </SafeAreaView>
      <View style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}>
          {isHydrated ? renderScreen() : null}
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

export default App;
