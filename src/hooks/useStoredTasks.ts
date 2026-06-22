import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

import {Task} from '../types/task';
import {initialTasks} from '../utils/tasks';

const TASKS_STORAGE_KEY = 'pritech.tasks';

export function useStoredTasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [hasLoadedTasks, setHasLoadedTasks] = useState(false);

  useEffect(() => {
    async function loadStoredTasks() {
      try {
        const storedTasks = await AsyncStorage.getItem(TASKS_STORAGE_KEY);

        if (storedTasks) {
          setTasks(JSON.parse(storedTasks) as Task[]);
        }
      } catch {
        // Ignore storage read errors and keep seeded tasks.
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
      // Ignore storage write errors and keep the UI responsive.
    });
  }, [hasLoadedTasks, tasks]);

  return {
    setTasks,
    tasks,
  };
}
