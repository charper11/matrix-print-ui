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
    const result = await print(PROGRAMS.LINK, true, formJson);
    console.log(result);
  };

  return (
    <>
    <div className="page-title">
      link print
    </div>
    <form onSubmit={handleSubmit}>
      <label>
        URL <input name="url" type="text" />
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
      <button type="submit">Print</button>
    </form>
    </>
  );
}