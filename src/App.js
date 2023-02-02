import './App.css';
import React, { useId, useState } from 'react'

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
  const postTextAreaId = useId();
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

  return (
    <div>
      <button onClick={printNewSudoku}>Sudoku</button>
      <label htmlFor={postTextAreaId}>
        Add text to print:
      </label>
      <textarea
        id={postTextAreaId}
        name="postContent"
        rows={4}
        cols={40}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={printText}>Print</button>
    </div>
  )
}

export default App;