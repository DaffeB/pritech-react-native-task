import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    gap: 18,
  },
  emptyScreen: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 22,
  },
  emptyScreenTitle: {
    color: '#16213e',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  emptyScreenText: {
    color: '#667085',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
  },
  detailsCard: {
    backgroundColor: '#eaf5ef',
    borderRadius: 14,
    padding: 18,
  },
  detailRow: {
    gap: 6,
  },
  separator: {
    backgroundColor: '#cfe3d7',
    height: 1,
    marginVertical: 16,
  },
  detailsLabel: {
    color: '#1f7a5c',
    fontSize: 11,
    fontWeight: '600',
  },
  detailsValue: {
    color: '#0f172a',
    fontSize: 14,
    lineHeight: 20,
  },
  detailsActions: {
    gap: 10,
  },
  detailsButton: {
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 13,
  },
  actionPrimary: {
    backgroundColor: '#102a43',
  },
  actionPrimaryText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  actionDanger: {
    backgroundColor: '#ffffff',
  },
  actionDangerText: {
    color: '#d92d20',
    fontSize: 13,
    fontWeight: '600',
  },
});
