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
    borderRadius: 14,
    marginBottom: 16,
    padding: 20,
  },
  eyebrow: {
    color: '#2f6f8f',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.1,
    marginBottom: 6,
  },
  heading: {
    color: '#0f172a',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 18,
  },
  input: {
    backgroundColor: '#f4f8fb',
    borderRadius: 12,
    color: '#101828',
    fontSize: 14,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  textArea: {
    minHeight: 104,
  },
  errorText: {
    color: '#d92d20',
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#102a43',
    borderRadius: 12,
    paddingVertical: 14,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
});
