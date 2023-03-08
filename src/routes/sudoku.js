import React, { useState } from "react";
import { PROGRAMS, print } from '../utils/printer-utils';

export default function Sudoku() {

  async function printSudoku() {
    // for now, just print sudoku
    const result = await print(PROGRAMS.SUDOKU);
    return result;
  }

  return (
    <>
      <button onClick={printSudoku}>Print sudoku</button>
    </>
  );
}