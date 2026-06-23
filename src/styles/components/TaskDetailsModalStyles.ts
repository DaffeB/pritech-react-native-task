import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.45)',
    justifyContent: 'flex-end',
  },
  modalCard: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
  },
  heading: {
    color: '#16213e',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },
  label: {
    color: '#667085',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 4,
    marginTop: 12,
    textTransform: 'uppercase',
  },
  value: {
    color: '#16213e',
    fontSize: 16,
    lineHeight: 22,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1d4ed8',
    borderRadius: 12,
    marginTop: 24,
    paddingVertical: 14,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
});
