import Page from "../../Components/Page/Page";
import Countdown from "./Countdown";
import AboutCard from "./AboutCard";
import PastYears from "./PastYears";
import PhotoGallery from "./PhotoGallery";
const Datahacks = () => {
    return (
      <Page>
        <Countdown />
        <AboutCard />
        <PastYears />
        <PhotoGallery />
      </Page>
    );
  };
  
export default Datahacks;