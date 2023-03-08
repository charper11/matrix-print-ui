import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import CustomPrint from "./routes/custom-print";
import Alarm from "./routes/alarm";
import Root from "./routes/root";
import LinkPrint from "./routes/link-print";
import Sudoku from "./routes/sudoku";

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
        {
          path: 'link-print',
          element: <LinkPrint />
        },
        {
          path: 'sudoku',
          element: <Sudoku />
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
