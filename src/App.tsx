import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/new-site" element={<Home />} />
    </Routes>
  );
}

export default App;
