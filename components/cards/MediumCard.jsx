import Image from "next/image";

const MediumCard = ({ cardData: { title, img } }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out min-h-[300px] py-3">
      <div className="relative w-[275px] h-[220px]">
        <Image
          src={img}
          alt={title}
          width={275}
          height={250}
          className="w-full h-full rounded-lg"
        />
        <h1 className="m-2 font-bold text-xl">{title}</h1>
      </div>
    </div>
  );
};

export default MediumCard;
