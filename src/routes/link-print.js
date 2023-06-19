import React from "react";
import { PROGRAMS, print } from '../utils/printer-utils';

export default function LinkPrint() {

  const handleSubmit = async (event) => {
    // prevent the browser from reloading the page
    event.preventDefault();

    // read the form data
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    // send data to print function
    const result = await print(PROGRAMS.LINK, false, formJson);
    console.log(result);
  };

  return (
    <>
      <div className="page-title">
        link print
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <label className="labeled-input">
            <span className="textbox-span">URL</span>
            <input name="url" type="text" className="input-textbox" />
          </label>
          <div className="option-container">
            <label className="option-label">
              <input className="option-labeled" name="text_only" type="checkbox" />
              basic format
            </label>
            <label className="option-label">
              <input className="option-labeled" name="ignore_href" type="checkbox" />
              ignore links
            </label>
            <label className="option-label">
              <input className="option-labeled" name="ff" type="checkbox" />
              form feed
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