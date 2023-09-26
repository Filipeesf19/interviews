import React, { useState } from "react";

const Exercise5: React.FC = () => {
  const [input, setInput] = useState<string>("");

  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button disabled={input.length < 1}>Submit</button>
    </>
  );
};

export default Exercise5;
