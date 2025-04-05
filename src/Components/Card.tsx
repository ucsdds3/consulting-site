interface CardProps {
  title: string;
  description: string;
  image?: string;
}

const LandingCard = ({ title, description, image }: CardProps) => {
  return (
    <div className="relative  flex flex-col items-center justify-center gap-4 border border-white hover:border-[#19B5CA] rounded-[1.5vw] w-[clamp(300px,20vw,300px)] h-96 group text-white overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_15px_#19B5CA]">
      <img
        src={image}
        alt={title}
        className="absolute w-[80%] object-cover opacity-100 group-hover:opacity-30 transition-opacity duration-300 left-1/2 top-[30%] transform -translate-x-1/2"
      />
      <div className="relative z-10 text-center px-4 h-[80%] flex flex-col gap-4">
        <h3 className="text-[clamp(15px,2.5vw,20px)] font-bold">{title}</h3>
        <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const WorkCard = ({ title, description, image }: CardProps) => {
  return (
    <div className="flex flex-col items-center">
      {image ? (
        <img src={image} alt={title} className="w-full" />
      ) : (
        <div className="w-full aspect-[1/1.2] bg-[#D9D9D9] rounded-lg" />
      )}
      <h3 className="text-[clamp(20px,2.5vw,30px)]font-bold text-white">
        {title}
      </h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
};

export { LandingCard, WorkCard };
