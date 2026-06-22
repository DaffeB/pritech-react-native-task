import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

import {Task} from '../types/task';
import {initialTasks} from '../utils/tasks';

const TASKS_STORAGE_KEY = 'pritech.tasks';

export function useStoredTasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    async function loadStoredTasks() {
      try {
        const storedTasks = await AsyncStorage.getItem(TASKS_STORAGE_KEY);

        if (storedTasks) {
          setTasks(JSON.parse(storedTasks) as Task[]);
        }
      } catch {

      } finally {
        setIsHydrated(true);
      }
    }

    loadStoredTasks();
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    AsyncStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks)).catch(() => {});
  }, [isHydrated, tasks]);

  return {
    isHydrated,
    setTasks,
    tasks,
  };
}
