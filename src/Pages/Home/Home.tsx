import React from "react";
import Page from "../../Components/Page/Page";
import AboutUs from "./AboutUs";
import WhereWeBeen from "./WhereWeBeen";
import Landing from "./Landing";
import Stats from "./Stats";
import Partners from "./Partners";
import { useRef } from 'react';

const Home = () => {
  const AboutUsRef = useRef<HTMLDivElement>(null!);
  return (
    <Page>
      <Landing aboutUsRef={AboutUsRef}/>
      <AboutUs aboutUsRef={AboutUsRef}/>
      <Stats />
      <WhereWeBeen />
      <Partners />
    </Page>
  );
};

export default Home;
