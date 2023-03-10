import React, { useState } from "react";
import { PROGRAMS, print } from '../utils/printer-utils';

export default function CustomPrint() {
  const [value, setValue] = useState();

  const printText = async () => {
    const my_data = { content: value };
    const result = await print(PROGRAMS.TEXT, true, my_data);

    console.log(result);
    setValue("");
  };

  return (
    <>
      <textarea
        id="textarea"
        name="postContent"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={!value || value === "" ? "Add text here to print" : ""}
      />
      <button onClick={printText}>Print</button>
    </>
  );
}
