import {
  HashRouter,
  Route,
  Routes
} from "react-router-dom";
import "./App.css";
import CustomPrint from "./routes/custom-print";
import Alarm from "./routes/alarm";
import Root from "./routes/root";
import LinkPrint from "./routes/link-print";
import Sudoku from "./routes/sudoku";
import Header from "./components/header";

function App() {

  return (
    <HashRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Root />} exact />
          <Route path='/alarm' element={<Alarm />} exact />
          <Route path='/custom-print' element={<CustomPrint />} exact />
          <Route path='/link-print' element={<LinkPrint />} exact />
          <Route path='/sudoku' element={<Sudoku />} exact />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
