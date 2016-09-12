export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};

//Usage
// import throttle from 'lodash/throttle';
//import { loadState, saveState } from './localStorage';
//const persistedState = loadState();

// store.subscribe(throttle(() => {
//   saveState({
//     todos: store.getState().todos,
//   });
// }, 1000));
