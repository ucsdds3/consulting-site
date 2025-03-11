import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Datahacks from "./Pages/Datahacks/Datahacks";
import Alumni from "./Pages/OurTeam/Alumni/Alumni";
import Board from "./Pages/OurTeam/Board/Board";
import Partners from "./Pages/Partners/PartnersPage";
import JoinUs from "./Pages/JoinUs/JoinUsPage";
import Projects from "./Pages/Projects/Projects";
import Workshop from "./Pages/Events/Workshop/Workshop";
import ProfessionalEvents from "./Pages/Events/ProfessionalEvents/ProfessionalEvents";
import Social from "./Pages/Events/Social/Social";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/join" element={<JoinUs />} />
      <Route path="events" />
      <Route path="/" element={<Home />} />
      <Route path="/events">
        <Route path="datahacks" element={<Datahacks />} />
        <Route path="workshops" element={<Workshop />} />
        <Route path="professional" element={<ProfessionalEvents />} />
        <Route path="projects" element={<Projects />} />
        <Route path="social" element={<Social />} />
      </Route>

      <Route path="/our-team">
        <Route path="alumni" element={<Alumni />} />
        <Route path="board" element={<Board />} />
      </Route>
    </Routes>
  );
}

export default App;
