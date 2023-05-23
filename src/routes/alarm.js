import React, { useState } from "react";
import { PROGRAMS, print } from '../utils/printer-utils';

export default function Alarm() {

  const minutesNumber = Array.from(Array(60).keys());
  const hourNumber = Array.from({length: 12}, (_, i) => i + 1);

  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [ampm, setAmPm] = useState();

  const hourChange = (event) => {
    setHour(event.target.value);
  }
  const minuteChange = (event) => {
    setMinute(event.target.value);
  }
  const ampmChange = (event) => {
    setAmPm(event.target.value);
  }

  const setAlarm = async (event) => {
    // prevent the browser from reloading the page
    event.preventDefault();

    //////////////////////////////////////
    //        set alarm date            //
    //////////////////////////////////////
    let military_hour = hour;
    if(ampm === 'PM') {
      military_hour += 12;
    }

    const now = new Date();
    const selectedTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), military_hour, minute, 0);

    if(selectedTime.getTime() < now.getTime()) {
      selectedTime.setDate(now.getDate() + 1);
    }

    // read the form data
    const form = event.target;
    const formData = new FormData(form);
    formData.append("alarmTime", selectedTime);
    const formJson = Object.fromEntries(formData.entries());
    const result = await print(PROGRAMS.ALARM, false, formJson);
    console.log(result);
  }

  return (
    <>
      <div className="page-title">
        alarm
      </div>
      <div className="alarm-form">
        <form onSubmit={setAlarm}>
        <select value={hour} onChange={hourChange}>
          <option value="Hour" selected hidden>Hour</option>
          {hourNumber.map((hour, index) => (
            <option key={index} value={hour}>
              {hour}
            </option>
          ))}
        </select>
        <select value={minute} onChange={minuteChange}>
          <option value="Minute" selected hidden>Minute</option>
          {minutesNumber.map((minutes, index) => (
            <option key={index} value={minutes}>
              {minutes}
            </option>
          ))}
        </select>
        <select value={ampm} onChange={ampmChange}>
          <option value="AM/PM" selected hidden>AM/PM</option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <br />
        <label>
          bell <input name="buzzer" type="checkbox" />
        </label>
        <br />
        <label>
          text <input name="text" type="text" />
        </label>
        <br />
        <label>
          newspaper <input name="newspaper" type="checkbox" />
        </label>
        <br />
        <label>
          form feed <input name="ff" type="checkbox" />
        </label>
        <br />
        <button type="submit">Set alarm</button>
        </form>
      </div>
    </>
  );
}
