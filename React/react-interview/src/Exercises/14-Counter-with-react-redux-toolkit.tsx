import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// Define a Redux slice for the counter
interface CounterState {
  value: number;
}

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 } as CounterState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value = state.value > 0 ? state.value - 1 : 0;
    },
  },
});

const { increment, decrement } = counterSlice.actions;

// Create a Redux store
const store = configureStore({
  reducer: counterSlice.reducer,
});

// Counter component
function Counter() {
  const count = useSelector((state: CounterState) => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())} disabled={count === 0}>
        Decrement
      </button>
    </div>
  );
}

// Render the Counter component within the Redux Provider
function Exercise14() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default Exercise14;
