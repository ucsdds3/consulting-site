import Page from "../Page/Page";
import AboutUs from "./AboutUs";
import WhereWeBeen from "./WhereWeBeen";
import Landing from "./Landing";
import OurWork from "./OurWork";
import Contact from "./Contact";

const Home = () => {
  return (
    <Page>
      <Landing />
      <AboutUs />
      <WhereWeBeen />
      <OurWork />
      <Contact />
    </Page>
  );
};

export default Home;
