import Page from "../../Components/Page/Page";
import AboutUs from "./AboutUs";
import WhereWeBeen from "./WhereWeBeen";
import Landing from "./Landing";
import Stats from "./Stats";
import Partners from "./Partners";
const Home = () => {
  return (
    <Page>
      <Landing />
      <AboutUs />
      <Stats />
      <WhereWeBeen />
      <Partners />
    </Page>
  );
};

export default Home;
