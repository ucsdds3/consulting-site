<<<<<<< HEAD
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"

=======
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
>>>>>>> 56c20cd (Feat: Created Simple Landing Page for #2)
function App() {
  return (
<<<<<<< HEAD
    <Routes>
      <Route path="/new-site" element={<Home />} />
    </Routes>
  )
=======
    <>
      <Navbar />
      <LandingPage />
    </>
  );
>>>>>>> 56c20cd (Feat: Created Simple Landing Page for #2)
}

export default App;
