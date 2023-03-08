import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import CustomPrint from "./routes/custom-print";
import Alarm from "./routes/alarm";
import Root from "./routes/root";

const printNewSudoku = async () => {
  const result = await fetch("http://192.168.1.155:3000/sudoku", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(result);
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: 'alarm',
          element: <Alarm />,
        },
        {
          path: 'custom-print',
          element: <CustomPrint />,
        },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
