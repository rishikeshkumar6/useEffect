import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Orgnism/Creates/Create";
import Read from "./components/Orgnism/Reads/Read";
import Update from "./components/Orgnism/Updates/Update";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;