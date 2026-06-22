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
  activity: string;
};

export function SuggestionCard({onAddTask}: SuggestionCardProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(
    'Fetch a quick task suggestion from a public API.',
  );

  const handleFetchSuggestion = async () => {
    if (typeof fetch !== 'function') {
      setMessage('Fetch is not available in this environment.');
      return;
    }

    try {
      setLoading(true);
      setMessage('Loading suggestion...');

      const response = await fetch('https://www.boredapi.com/api/activity');
      const data = (await response.json()) as SuggestionResponse;

      if (!data.activity) {
        throw new Error('Invalid response');
      }

      onAddTask({
        title: 'API suggestion',
        description: data.activity,
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
    borderRadius: 20,
    marginBottom: 16,
    padding: 24,
  },
  eyebrow: {
    color: '#94a3b8',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.1,
    marginBottom: 8,
  },
  heading: {
    color: '#0f172a',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    color: '#64748b',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 18,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0f172a',
    borderRadius: 16,
    minHeight: 52,
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});
