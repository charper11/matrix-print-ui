import React from "react";
import { PROGRAMS, print } from '../utils/printer-utils';

export default function Sudoku() {

  const handleSubmit = async (event) => {
    // prevent the browser from reloading the page
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    // send data to print function
    const result = await print(PROGRAMS.SUDOKU, false, formJson);
    console.log(result);
  };

  return (
    <>
      <div className="page-title">
        sudoku
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
        <p>
          difficulty
          <br />
          <label><input type="radio" name="difficulty" value="easy" /> easy </label>
          <br />
          <label><input type="radio" name="difficulty" value="medium" /> medium </label>
          <br />
          <label><input type="radio" name="difficulty" value="hard" /> hard </label>
        </p>
        </div>
        <div className="button-container">
          <button type="submit">Print</button>
        </div>
      </form>
    </>
  );
}