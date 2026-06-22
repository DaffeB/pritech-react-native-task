/* global jest */

const mockAsyncStorage = {
  clear: jest.fn(),
  getAllKeys: jest.fn(() => Promise.resolve([])),
  getItem: jest.fn(() => Promise.resolve(null)),
  multiGet: jest.fn(() => Promise.resolve([])),
  removeItem: jest.fn(() => Promise.resolve()),
  setItem: jest.fn(() => Promise.resolve()),
};

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
