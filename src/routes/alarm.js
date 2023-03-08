import React, { useState } from "react";
import { PROGRAMS, print } from '../utils/printer-utils';

export default function Alarm() {
  const [value, setValue] = useState();

  async function setAlarm() {
    // for now, just rings alarm
    const result = await print(PROGRAMS.ALARM);
    return result;
  }

  return (
    <>
      <button onClick={setAlarm}>Set alarm</button>
    </>
  );
}
