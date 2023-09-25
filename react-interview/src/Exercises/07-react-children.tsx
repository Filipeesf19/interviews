import React, { ReactNode } from "react";

const Child: React.FC = () => {
  return <div>This is children content</div>;
};

interface ParentProps {
  children: ReactNode;
}

const Parent: React.FC<ParentProps> = ({ children }) => {
  return (
    <div>
      <h3>Parent Component</h3>
      {children}
    </div>
  );
};

const Exercise7: React.FC = () => {
  return (
    <Parent>
      <Child />
    </Parent>
  );
};

export default Exercise7;
