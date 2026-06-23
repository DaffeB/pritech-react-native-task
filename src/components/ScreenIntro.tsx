import React from 'react';
import {Text, View} from 'react-native';

import {styles} from '../styles/components/ScreenIntroStyles';

type ScreenIntroProps = {
  eyebrow: string;
  subtitle: string;
  title: string;
};

export function ScreenIntro({eyebrow, subtitle, title}: ScreenIntroProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.eyebrow}>{eyebrow}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
