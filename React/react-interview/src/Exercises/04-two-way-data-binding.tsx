import React, { useState } from "react";

const Exercise4: React.FC = () => {
  const [input, setInput] = useState<string>("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter Text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>{input}</p>
    </>
  );
};

export default Exercise4;
