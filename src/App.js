import { TextField } from '@material-ui/core';
import React, {useState} from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState("");

  return (
    <div className="App">
      <TextField id ='name' onChange={e=>setCount(e.target.value)}>
      </TextField>
      <p>Above entered Value will be displayed here : </p><p id='displayText'>{count}</p>
    </div>
  );
}

export default App;
