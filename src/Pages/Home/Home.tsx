import Page from "../../Components/Page/Page";
import AboutUs from "./AboutUs";
import Events from "./Events";
import Landing from "./Landing";
import Sponsers from "./Sponsers";
import Stats from "./Stats";

const Home = () => {
  return (
    <Page>
      <Landing />
      <AboutUs />
      <Stats />
      <Events />
      <Sponsers />
    </Page>
  );
};

export default Home;
