import workshopImage from "../../Assets/Images/homepage-img2-1.png";

const Header = () => {
  return (
    <div className="flex items-center justify-center py-6 gap-10">
      {/* Workshop Text */}
      <div className="flex flex-col items-start">
        <div className="w-[516px] h-[61px] text-black text-3xl font-normal font-['Albert Sans'] leading-[65px]">Want to learn something new?</div>
        <div className="w-[604px] text-black text-[80px] font-medium font-['Albert Sans'] leading-[70px]">WORKSHOPS</div>
      </div>
      
      {/* Workshop Image */}
      <img className="w-[604px] h-[604px]" src={workshopImage} alt="Workshop Decor Image" />
    </div>
  );
};

export default Header;
