import React from 'react'

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
  return (
    <div>
      <button onClick={printNewSudoku}>Sudoku</button>
    </div>
  )
}

export default App;