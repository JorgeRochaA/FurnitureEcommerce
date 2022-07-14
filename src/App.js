import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import FurnitureByCategory from "./views/FurnitureByCategory";
import Error from "./views/Error";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/Category/:name"
            element={<FurnitureByCategory />}
          ></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
