interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 border border-white hover:border-[#19B5CA] rounded-[1.5vw] w-[15vw] h-[20vw] group text-white overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_15px_#19B5CA]">
      <img
        src={image}
        alt={title}
        className="absolute w-[80%] object-cover opacity-100 group-hover:opacity-30 transition-opacity duration-300 left-1/2 top-[30%] transform -translate-x-1/2"
      />
      <div className="relative z-10 text-center px-4 h-[80%] flex flex-col gap-4">
        <h3 className="text-[1.5vw] font-bold">{title}</h3>
        <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
