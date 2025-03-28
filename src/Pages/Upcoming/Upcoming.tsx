import Page from "../../Components/Page/Page";
import UpcomingLanding from "../Upcoming/UpcomingLanding.tsx"
import Calendar from "../Upcoming/Calendar.tsx"

const Upcoming = () => {
  return (
    <Page>
        <UpcomingLanding />
        <Calendar />
    </Page>
  );
};

export default Upcoming;
