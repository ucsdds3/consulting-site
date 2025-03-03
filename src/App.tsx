import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Datahacks from "./Pages/Datahacks/Datahacks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-team/datahacks" element={<Datahacks />} />
    </Routes>
  );
}

export default App;
