import React, {useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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
    'Fetch a task idea from a free public API.',
  );

  const handleFetchSuggestion = async () => {
    if (typeof fetch !== 'function') {
      setMessage('Fetch is not available in this environment.');
      return;
    }

    try {
      setLoading(true);
      setMessage('Loading suggestion...');

      const response = await fetch('https://dummyjson.com/todos/random');
      const data = (await response.json()) as SuggestionResponse;

      if (!data.todo) {
        throw new Error('Invalid response');
      }

      onAddTask({
        title: data.completed ? 'Completed idea from API' : 'Task idea from API',
        description: data.todo,
      });

      setMessage('Suggestion added successfully.');
    } catch {
      setMessage('Could not fetch a suggestion right now.');
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

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    marginBottom: 16,
    padding: 20,
  },
  eyebrow: {
    color: '#1f7a5c',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.1,
    marginBottom: 6,
  },
  heading: {
    color: '#0f172a',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  description: {
    color: '#64748b',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1f7a5c',
    borderRadius: 12,
    minHeight: 46,
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
  },
});
