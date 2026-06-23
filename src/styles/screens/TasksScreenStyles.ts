import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 26,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#102a43',
    borderRadius: 14,
    padding: 16,
  },
  statCardAccent: {
    backgroundColor: '#1f7a5c',
  },
  statValue: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  statLabel: {
    color: '#d9e2ec',
    fontSize: 12,
    fontWeight: '500',
  },
});
