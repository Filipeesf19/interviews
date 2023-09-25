import React, { useState } from "react";

const Exercise8: React.FC = () => {
  const [number1, setNumber1] = useState<number | undefined>(undefined);
  const [number2, setNumber2] = useState<number | undefined>(undefined);
  const [total, setTotal] = useState<number | undefined>(0);

  function calculateTotal() {
    if (typeof number1 === "number" && typeof number2 === "number") {
      setTotal(number1 + number2);
    }
  }

  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input
        placeholder="First Number"
        type="number"
        value={number1 ?? ""}
        onChange={(e) => setNumber1(+e.target.value)}
      />
      <input
        placeholder="Second Number"
        type="number"
        value={number2 ?? ""}
        onChange={(e) => setNumber2(+e.target.value)}
      />

      <button onClick={calculateTotal}>Add Two Numbers</button>
      <p>Total: {total ?? ""}</p>
    </div>
  );
};

export default Exercise8;
