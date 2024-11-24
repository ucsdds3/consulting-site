import Page from "../../Components/Page/Page";
import AboutUs from "./AboutUs";
import WhereWeBeen from "./WhereWeBeen";
import Landing from "./Landing";
import Stats from "./Stats";

const Home = () => {
  return (
    <Page>
      <Landing />
      <AboutUs />
      <Stats />
      <WhereWeBeen />
    </Page>
  );
};

export default Home;
