import Layer1 from "/src/Assets/Layer1.png";
import Layer2 from "/src/Assets/Layer2.png";
import Layer3 from "/src/Assets/Layer3.png";

const AboutUs = () => {
  return (
    <div
      className="flex p-24 min-h-[80vh] w-fit justify-center gap-3 flex-wrap flex-col-reverse lg:flex-row"
      id="about-us"
    >
      <div className="relative w-[clamp(300px,40vw,600px)] h-[500px] m-auto">
        <img src={Layer3} alt="Layer 3" className="absolute w-full z-3 top-0" />
        <img
          src={Layer2}
          alt="Layer 2"
          className="absolute w-full z-2 top-[80px]"
        />
        <img
          src={Layer1}
          alt="Layer 1"
          className="absolute w-full z-1 top-[160px]"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center items-center gap-5 max-w-[800px] min-w-[300px]">
        <h2 className="text-[clamp(20px,4vw,35px)] text-white font-bold">
          WHO WE ARE
        </h2>
        <p className="text-[clamp(20px,2.5vw,30px)] text-white indent-8 text-wrap">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
