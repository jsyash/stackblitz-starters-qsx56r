import React, { useState, useCallback } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  // Without useCallback:
  // const handleClick = () => {
  //   console.log('Button clicked!');
  // };

  // With useCallback:
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
  }, []); // The empty dependency array means the function doesn't depend on any props or state

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

// ChildComponent is a separate component that receives the callback prop
function ChildComponent({ onClick }) {
  return (
    <div>
      <p>Child Component</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
export default ExampleComponent;
