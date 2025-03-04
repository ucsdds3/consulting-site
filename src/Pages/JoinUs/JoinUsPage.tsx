import Page from "../../Components/Page/Page";
import FAQ from "./FAQ";
import JoinUs from "./JoinUs";
import ContactUs from "./ContactUs";

const JoinUsPage = () => {
  return (
    <Page>
      <JoinUs />
      <ContactUs />
      <FAQ type="joinUs" />
    </Page>
  );
};

export default JoinUsPage;
