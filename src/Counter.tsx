import { useState } from "react";
import "./styles.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="btn__wrapper">
      <button onClick={handleClick}>Count: {count}</button>
    </div>
  );
};

export default Counter;
