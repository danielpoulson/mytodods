import { v4 } from 'node-uuid';

//This is a fake in-memory implemenation of something
// that would be implemented by calling a REST server

const fakeDatabase = {
  todos: [
    {
      id: v4(),
      text: "I love a good todo",
      completed: true,
    },
    {
      id: v4(),
      text: "Learn to code",
      completed: false,
    },
  ],
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

  export const fetchTodos = (filter) =>
    delay(500).then(() => {
      switch (filter) {
        case 'all':
          return fakeDatabase.todos;
        case 'active':
          return fakeDatabase.todos.filter(t => !t.completed);
        case 'completed':
          return fakeDatabase.todos.filter(t => t.completed);
        default:
          throw new Error(`Unknown filter: ${filter}`);
      }
    });
