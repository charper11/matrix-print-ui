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
          <p className="difficulty-text">
            difficulty
          </p>

          <div className="option-container">
            <label className="option-label">
              <input className="option-labeled" type="radio" name="difficulty" value="easy" />
              easy
            </label>
            <label className="option-label">
              <input className="option-labeled" type="radio" name="difficulty" value="medium" />
              medium
            </label>
            <label className="option-label">
              <input className="option-labeled" type="radio" name="difficulty" value="hard" />
              hard
            </label>
          </div>
        </div>
        <div className="button-container">
          <button type="submit">Print</button>
        </div>
      </form>
    </>
  );
}