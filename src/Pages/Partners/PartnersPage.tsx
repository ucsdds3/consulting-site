import Page from "../../Components/Page/Page";
import WantToSupport from "./WantToSupport";
import WorkWithUs from "./WorkWithUs";
import FAQ from "../JoinUs/FAQ";
import ContactUs from "../JoinUs/ContactUs";

const PartnersPage = () => {
  return (
    <Page>
      <WantToSupport />
      <ContactUs />
      <WorkWithUs />
      <FAQ type="partners" />
    </Page>
  );
};

export default PartnersPage;
