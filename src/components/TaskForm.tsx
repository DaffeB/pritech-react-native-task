import React, {useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';

import {styles} from '../styles/components/TaskFormStyles';
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
      setError('Task title is required');
      return;
    }

    if (!trimmedDescription) {
      setError('Task description is required');
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
