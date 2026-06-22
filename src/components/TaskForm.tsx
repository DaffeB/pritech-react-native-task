import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {TaskFormValues} from '../types/task';

type TaskFormProps = {
  onSubmit: (values: TaskFormValues) => void;
};

export function TaskForm({onSubmit}: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if (!trimmedTitle) {
      setError('Task title is required.');
      return;
    }

    if (!trimmedDescription) {
      setError('Task description is required.');
      return;
    }

    onSubmit({
      title: trimmedTitle,
      description: trimmedDescription,
    });

    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <View style={styles.card}>
      <Text style={styles.eyebrow}>FORM</Text>
      <Text style={styles.heading}>Add new task</Text>

      <TextInput
        placeholder="Task title"
        placeholderTextColor="#98a2b3"
        style={styles.input}
        value={title}
        onChangeText={text => {
          setTitle(text);
          if (error) {
            setError('');
          }
        }}
      />

      <TextInput
        placeholder="Short description"
        placeholderTextColor="#98a2b3"
        multiline
        style={[styles.input, styles.textArea]}
        textAlignVertical="top"
        value={description}
        onChangeText={text => {
          setDescription(text);
          if (error) {
            setError('');
          }
        }}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add task</Text>
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
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f8fafc',
    borderRadius: 16,
    color: '#101828',
    fontSize: 15,
    marginBottom: 14,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  textArea: {
    minHeight: 120,
  },
  errorText: {
    color: '#d92d20',
    fontSize: 13,
    marginBottom: 12,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0f172a',
    borderRadius: 16,
    paddingVertical: 16,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
});
