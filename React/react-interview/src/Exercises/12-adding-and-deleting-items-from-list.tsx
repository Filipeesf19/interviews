import React, { useState } from "react";

const Exercise12: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const deleteItem = (item: string) => {
    setList(list.filter((ele) => ele !== item));
  };

  const addItem = (value: string) => {
    if (input) {
      setList([...list, value]);
      setInput("");
    }
  };

  const handleChange = (value: string) => {
    setInput(value);
  };

  return (
    <>
      <input type="text" value={input} onChange={(e) => handleChange(e.target.value)}></input>
      <button onClick={() => addItem(input)}>Add</button>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index} onClick={() => deleteItem(item)}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Exercise12;
