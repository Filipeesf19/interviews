import React, { useState } from "react";

interface ChildProps {
  setValue: (value: string) => void;
}

const Child: React.FC<ChildProps> = ({ setValue }) => {
  return (
    <>
      <div>Child</div>
      <button onClick={() => setValue("Updated Text")}>Change Parent Value</button>
    </>
  );
};

const Parent: React.FC = () => {
  const [value, setValue] = useState<string>("I need to be updated from my child");

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child setValue={setValue} />
      </div>
    </>
  );
};

export default Parent;
