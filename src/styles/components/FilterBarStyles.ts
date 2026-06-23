import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    marginBottom: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  filtersRow: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  filterButton: {
    backgroundColor: '#f4f8fb',
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  filterButtonActive: {
    backgroundColor: '#102a43',
  },
  filterButtonText: {
    color: '#334e68',
    fontSize: 13,
    fontWeight: '600',
  },
  filterButtonTextActive: {
    color: '#ffffff',
  },
});
