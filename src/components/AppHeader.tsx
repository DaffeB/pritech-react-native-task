import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {Screen} from '../types/navigation';

type AppHeaderProps = {
  activeScreen: Screen;
  canOpenDetails: boolean;
  onChangeScreen: (screen: Screen) => void;
};

export function AppHeader({
  activeScreen,
  canOpenDetails,
  onChangeScreen,
}: AppHeaderProps) {
  return (
    <View style={styles.topBar}>
      <View style={styles.brandBlock}>
        <Text style={styles.brandEyebrow}>PRITECH</Text>
        <Text style={styles.brandTitle}>Simple Tasks</Text>
      </View>

      <View style={styles.tabRow}>
        <Pressable
          style={[
            styles.topBarButton,
            activeScreen === 'tasks' && styles.topBarButtonActive,
          ]}
          onPress={() => onChangeScreen('tasks')}>
          <Text
            style={[
              styles.topBarButtonText,
              activeScreen === 'tasks' && styles.topBarButtonTextActive,
            ]}>
            Tasks
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.topBarButton,
            activeScreen === 'add' && styles.topBarButtonActive,
          ]}
          onPress={() => onChangeScreen('add')}>
          <Text
            style={[
              styles.topBarButtonText,
              activeScreen === 'add' && styles.topBarButtonTextActive,
            ]}>
            Add Task
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.topBarButton,
            !canOpenDetails && styles.topBarButtonDisabled,
            activeScreen === 'details' && styles.topBarButtonActive,
          ]}
          disabled={!canOpenDetails}
          onPress={() => onChangeScreen('details')}>
          <Text
            style={[
              styles.topBarButtonText,
              !canOpenDetails && styles.topBarButtonTextDisabled,
              activeScreen === 'details' && styles.topBarButtonTextActive,
            ]}>
            Details
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#102a43',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 6,
  },
  brandBlock: {
    marginBottom: 16,
  },
  brandEyebrow: {
    color: '#7fb3d5',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.2,
    marginBottom: 4,
  },
  brandTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
  },
  tabRow: {
    flexDirection: 'row',
    gap: 8,
  },
  topBarButton: {
    borderRadius: 999,
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  topBarButtonActive: {
    backgroundColor: '#1f4068',
  },
  topBarButtonDisabled: {
    opacity: 0.45,
  },
  topBarButtonText: {
    color: '#d9e2ec',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  topBarButtonTextActive: {
    color: '#ffffff',
  },
  topBarButtonTextDisabled: {
    color: '#9fb3c8',
  },
});
