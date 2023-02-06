import './App.css';
import React, { useState } from 'react'

const printNewSudoku = async () => {
  const result = await fetch('http://192.168.1.155:3000/sudoku', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  console.log(result);
}

function App() {
  const [value, setValue] = useState();

  const printText = async () => {
    const my_data = { content: value};
    const result = await fetch('http://192.168.1.155:3000/text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(my_data)
    });

  console.log(result);
  setValue("");
  };

  //      <button onClick={printNewSudoku}>Sudoku</button>

  return (
    <div>
      <div className='title'>
        <h1>Matrix Print</h1>
      </div>
      <textarea
        id="textarea"
        name="postContent"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={!value || value === "" ? "Add text here to print" : ""}
      />
      <button onClick={printText}>Print</button>
    </div>
  )
}

export default App;