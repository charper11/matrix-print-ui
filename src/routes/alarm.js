import React, { useState } from "react";
import { PROGRAMS, print } from '../utils/printer-utils';

export default function Alarm() {

  async function setAlarm() {
    // for now, just rings alarm
    const result = await print(PROGRAMS.ALARM);
    return result;
  }

  return (
    <>
      <div className="page-title">
        alarm
      </div>
      <div className="alarm-form">
        <label>
          newspaper <input type="checkbox" />
        </label>
        <br />
        <label>
          sudoku
          <select>
            <option></option>
            <option>easy</option>
            <option>medium</option>
            <option>hard</option>
          </select>
        </label>
        <br />
        <label>
          subway alerts <input type="checkbox" />
        </label>
        <br />
        <label>
          weather <input type="checkbox" />
        </label>
        <button onClick={setAlarm}>Set alarm</button>
      </div>
    </>
  );
}
