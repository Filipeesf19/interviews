import React, { createContext, useContext } from "react";

interface CountContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CountContext = createContext<CountContextType | undefined>(undefined);

const Child: React.FC = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("Child component must be used within a CountContextProvider");
  }
  const { count, setCount } = context;

  const decrease = () => setCount(count - 1);
  const increase = () => setCount(count + 1);

  return (
    <>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </>
  );
};

const Parent: React.FC = () => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <>
      <CountContext.Provider value={{ count, setCount }}>
        <div>Counter: {count}</div>
        <Child />
      </CountContext.Provider>
    </>
  );
};

export default Parent;
