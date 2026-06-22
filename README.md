# Pritech React Native Task

A simple personal task manager built with React Native and TypeScript.

## Implemented features

- Task list screen
- Add new task
- Mark task as completed or pending
- Delete task
- Simple task details view
- Basic input validation
- Empty state handling
- Search tasks by title
- Filter tasks by status
- Fetch a task suggestion from a public API

## Project structure

The project is intentionally kept simple:

- `App.tsx` handles screen composition and state
- `src/components` contains small reusable UI components
- `src/types` contains shared TypeScript types
- `src/utils` contains task helpers

## How to run

### 1. Install dependencies

```sh
npm install
```

### 2. Start Metro

```sh
npm start
```

### 3. Run the app

Android:

```sh
npm run android
```

iOS:

```sh
bundle install
bundle exec pod install
npm run ios
```

## Public API used

The app uses a public API to fetch a task suggestion:

- `https://www.boredapi.com/api/activity`

When the request succeeds, a suggested task is added to the list automatically.

## Notes

- The app uses functional components and hooks only.
- The implementation focuses on clarity and simple code organization.
- No unnecessary libraries were added for navigation or state management.
