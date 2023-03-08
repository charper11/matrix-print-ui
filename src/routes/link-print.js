import React, { useState } from "react";
import { PROGRAMS, print } from '../utils/printer-utils';

export default function LinkPrint() {
  const [value, setValue] = useState();

  const printText = async () => {
    const my_data = { content: value };
    const result = await print(PROGRAMS.LINK, true, my_data);

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
        placeholder={!value || value === "" ? "Add url here to print" : ""}
      />
      <button onClick={printText}>Print</button>
    </>
  );
}