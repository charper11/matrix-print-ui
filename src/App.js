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
        <h2 style={{ color: 'white' }}>></h2><h2> Matrix Print</h2><h2 style={{color: '#206c9b'}}>|</h2>
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