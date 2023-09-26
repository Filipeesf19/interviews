import React, { useState } from "react";

const Exercise3: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Element Below" : "Show Element Below"}
      </button>
      {show && <div>Toggle Challenge</div>}
    </>
  );
};

export default Exercise3;
