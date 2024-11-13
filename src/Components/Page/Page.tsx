import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageProps {
  children?: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <SimpleBar className={`absolute left-0 top-0 w-screen h-screen overflow-x-hidden bg-[#101010]`}>
      <Navbar />
      <div className="flex flex-col items-center py-[10vh]">
        {children || (
          <>
            <h2 className="text-white text-center hero-text-shadow mt-10 mb-10 text-[3.75vw]">Coming Soon</h2>
            <img
              src={`/src/Assets/Images/Sleepy_Bear.png`}
              alt="Under Construction"
              className="bear mt-24 w-[42vw]"
            />
          </>
        )}
      </div>
      <Footer />
    </SimpleBar>
  );
};

export default Page;
