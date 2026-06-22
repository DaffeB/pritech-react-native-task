import React from 'react';

import {ScreenIntro} from '../components/ScreenIntro';
import {SuggestionCard} from '../components/SuggestionCard';
import {TaskForm} from '../components/TaskForm';
import {TaskFormValues} from '../types/task';

type AddTaskScreenProps = {
  onAddTask: (values: TaskFormValues) => void;
};

export function AddTaskScreen({onAddTask}: AddTaskScreenProps) {
  return (
    <>
      <ScreenIntro
        eyebrow="NEW TASK"
        subtitle="Write a short title and description, or use the API suggestion below."
        title="Add a task"
      />

      <TaskForm onSubmit={onAddTask} />
      <SuggestionCard onAddTask={onAddTask} />
    </>
  );
}
