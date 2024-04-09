import { Button } from "@/components/ui/button";

type CardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({ imageSrc, imageAlt, title, onClick }) => (
  <div 
    className="flex flex-col items-center bg-[#111] p-6 rounded-lg shadow-lg overflow-hidden relative cursor-pointer
               transition duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
    onClick={onClick}
  >
    <div className="relative w-full h-64 -mt-16 mb-4">
      <img
        alt={imageAlt}
        className="rounded-lg object-cover h-full w-full shadow-sm"
        src={imageSrc}
      />
    </div>
    <div className="z-10">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <Button className="mt-2" variant="outline">
        Read more
      </Button>
    </div>
  </div>
);

export function NewsCard() {
  const cards = [
    { imageSrc: "/pxb-media-logo.png", imageAlt: "Esport event", title: "Esport Events Redefined." },
    { imageSrc: "/pxb-media-logo.png", imageAlt: "Gaming keyboard", title: "Latest in Gaming Tech." },
    { imageSrc: "/pxb-media-logo.png", imageAlt: "Gaming mouse", title: "Elevate Your Game." },
  ];

  return (
    <div className="bg-[#1A1A1A] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
