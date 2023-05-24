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
      <label>
        URL <input name="url" type="text" className="textbox" />
      </label>
      <br />
      <label>
        basic format <input name="text_only" type="checkbox" />
      </label>
      <br />
      <label>
        ignore links <input name="ignore_href" type="checkbox" />
      </label>
      <br />
      <label>
        form feed <input name="ff" type="checkbox" />
      </label>
      <br />
      </div>
      <div className="button-container">
        <button type="submit">Print</button>
      </div>
    </form>
    </>
  );
}