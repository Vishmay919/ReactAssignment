import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { animated, useSpring } from 'react-spring';
import './Counter.css';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const props = useSpring({ backgroundColor: `rgba(255, 0, 0, ${count * 0.1})` });

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const reset = () => setCount(0);

  return (
    <animated.div style={{ ...props, padding: '20px', borderRadius: '5px' }} className="counter">
      <Typography variant="h4" className="title">Counter</Typography>
      <div className="buttonContainer">
        <Button variant="contained" color="success" size="small" onClick={increment}>Increment</Button>
        <Button variant="contained" size="small" onClick={reset}>Reset</Button>
        <Button variant="contained" color="error" size="small" onClick={decrement}>Decrement</Button>
      </div>
      <Typography variant="h6">Count: {count}</Typography>
    </animated.div>
  );
};

export default Counter;
