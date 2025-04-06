import Page from "../../Components/Page/Page";
import UpcomingLanding from "../Upcoming/UpcomingLanding.tsx";
import UpcomingEvents from "./UpcomingEvents.tsx";
// import Calendar from "../Upcoming/Calendar.tsx"

const Upcoming = () => {
  return (
    <Page>
      <UpcomingLanding />
      {/* <Calendar /> */}
      <UpcomingEvents />
    </Page>
  );
};

export default Upcoming;
