import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {styles} from '../styles/components/AppHeaderStyles';
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
