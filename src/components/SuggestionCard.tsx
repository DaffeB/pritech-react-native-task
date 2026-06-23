import React, {useState} from 'react';
import {ActivityIndicator, Pressable, Text, View} from 'react-native';

import {styles} from '../styles/components/SuggestionCardStyles';
import {TaskFormValues} from '../types/task';

type SuggestionCardProps = {
  onAddTask: (values: TaskFormValues) => void;
};

type SuggestionResponse = {
  completed: boolean;
  todo: string;
};

export function SuggestionCard({onAddTask}: SuggestionCardProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(
    'Fetch a task idea from a free public API',
  );

  const handleFetchSuggestion = async () => {
    if (typeof fetch !== 'function') {
      setMessage('Fetch is not available in this environment');
      return;
    }

    try {
      setLoading(true);
      setMessage('Loading suggestion');

      const response = await fetch('https://dummyjson.com/todos/random');

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = (await response.json()) as SuggestionResponse;

      if (!data.todo) {
        throw new Error('Invalid response');
      }

      onAddTask({
        title: data.completed ? 'Imported completed task' : 'Imported task idea',
        description: data.todo,
      });

      setMessage('Suggestion added successfully');
    } catch {
      setMessage('Could not fetch a task from the API right now');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.eyebrow}>SUGGESTION</Text>
      <Text style={styles.heading}>Public API</Text>
      <Text style={styles.description}>{message}</Text>

      <Pressable
        style={styles.button}
        disabled={loading}
        onPress={handleFetchSuggestion}>
        {loading ? (
          <ActivityIndicator color="#ffffff" />
        ) : (
          <Text style={styles.buttonText}>Fetch task suggestion</Text>
        )}
      </Pressable>
    </View>
  );
}
