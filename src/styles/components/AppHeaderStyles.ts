import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
