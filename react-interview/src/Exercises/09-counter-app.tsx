import React, { useState } from "react";

const Exercise9: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Exercise9;
