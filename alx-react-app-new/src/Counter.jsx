import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // This is how we store and update the number

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <p style={{ fontSize: '24px' }}>Current Count: {count}</p>
      
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px' }}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)} style={{ marginRight: '10px' }}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
