import React, { useState } from "react";
import { PROGRAMS, print } from '../utils/printer-utils';

export default function Alarm() {

  const minutesNumber = Array.from({ length: 60 }, (_, i) => {
    if (i < 10) {
      return i.toString().padStart(2, '0');
    }
    return i;
  });
  const hourNumber = Array.from({ length: 12 }, (_, i) => i + 1);

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
    if (ampm === 'PM') {
      military_hour += 12;
    }

    const now = new Date();
    const selectedTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), military_hour, minute, 0);

    if (selectedTime.getTime() < now.getTime()) {
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
          <div className="form-container">
            <div className="alarm-time">
              <select className="alarm-dropdown" value={hour} onChange={hourChange}>
                <option value="Hour" selected hidden>HR</option>
                {hourNumber.map((hour, index) => (
                  <option key={index} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              <select className="alarm-dropdown" value={minute} onChange={minuteChange}>
                <option value="Minute" selected hidden>MIN</option>
                {minutesNumber.map((minutes, index) => (
                  <option key={index} value={minutes}>
                    {minutes}
                  </option>
                ))}
              </select>
              <select className="alarm-dropdown" value={ampm} onChange={ampmChange}>
                <option value="AM/PM" selected hidden>AM/PM</option>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
            <br />
            <label className="labeled-input">
              <span className="textbox-span">text</span>
              <input name="text" type="text" className="input-textbox" />
            </label>

            <div className="option-container">
              <label className="option-label">
                <input className="option-labeled" name="buzzer" type="checkbox" />
                bell
              </label>
              <label className="option-label">
                <input className="option-labeled" name="newspaper" type="checkbox" />
                newspaper
              </label>
              <label className="option-label">
                <input className="option-labeled" name="ff" type="checkbox" />
                form feed
              </label>
            </div>
          </div>
          <div className="button-container">
            <button type="submit">Set alarm</button>
          </div>
        </form>
      </div>
    </>
  );
}
