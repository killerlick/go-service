"use client";

import { useState  , useEffect} from "react";

interface CarouselProps {
    items: {
        id: string;
        title: string;
        image: string;
    }[];
}

export default function Carousel({ items }: CarouselProps) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    }

    const next = () => {
        setCurrentIndex((nextIndex) =>
            nextIndex === items.length - 1 ? 0 : nextIndex + 1
        );
    }

      useEffect(() =>{
    const interval = setInterval(() =>{
        next();
    },3000);
    return () => clearInterval(interval);
  },[items.length ]
);

    if (items.length === 0) {
        return <div>No items to display</div>;
    }

    const currentItem = items[currentIndex];

    return (

        <div className="relative w-full max-w-lg mx-auto">

            <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-64 object-cover rounded-lg"></img>

            <h3 className="text-center mt-2 text-lg font-semibold">
                {currentItem.title}
            </h3>

            <button
                onClick={prev}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full">
                &#8592;
            </button>
            <button
                onClick={next}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full">
                &#8594;
            </button>

            <div className="flex justify-center mt-2 gap-1">
                {items.map((_, idx) => (
                    <span
                        key={idx}
                        className={`w-2 h-2 rounded-full ${idx === currentIndex ? "bg-blue-500" : "bg-gray-300"
                            }`}
                    ></span>
                ))}
            </div>


        </div>

    );




}