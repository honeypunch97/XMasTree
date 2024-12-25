import { useState } from 'react';
import Tree from './Tree';
import './styles/reset.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Tree />
    </>
  );
}

export default App;
