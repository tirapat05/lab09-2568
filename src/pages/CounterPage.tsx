import { useState } from "react";

export default function CounterPage() {
  const[count,setCount] = useState(0);
  const addCount = () => {
    setCount( count + 1);
  }
  
  return (
    <div className="container text-center">
      <h2>Counter Page</h2>
      {/* Result Text */}
      <p>Counter {count}:</p>
      <button onClick={addCount}>Increase</button>
    </div>
  );
}
