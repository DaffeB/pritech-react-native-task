const mockAsyncStorage = {
  clear: jest.fn(),
  getAllKeys: jest.fn(() => Promise.resolve([])),
  getItem: jest.fn(() => Promise.resolve(null)),
  multiGet: jest.fn(() => Promise.resolve([])),
  removeItem: jest.fn(() => Promise.resolve()),
  setItem: jest.fn(() => Promise.resolve()),
};

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

const originalWarn = console.warn;
const originalError = console.error;

console.warn = (...args) => {
  const [message] = args;

  if (
    typeof message === 'string' &&
    message.includes('SafeAreaView has been deprecated')
  ) {
    return;
  }

  originalWarn(...args);
};

console.error = (...args) => {
  const [message] = args;

  if (
    typeof message === 'string' &&
    message.includes('An update to App inside a test was not wrapped in act')
  ) {
    return;
  }

  originalError(...args);
};
