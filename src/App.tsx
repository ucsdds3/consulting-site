import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Alumni from "./Pages/Alumni/Alumni";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="our-team">
        <Route path="alumni" element={<Alumni />} />
      </Route>
    </Routes>
  );
}

export default App;
