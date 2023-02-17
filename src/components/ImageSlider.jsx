import React, { useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { useSwipeable } from "react-swipeable";

function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const swipeHandler = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);

  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  // auto slide after 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="flex gap-10 justify-center items-center">
      <BsFillArrowLeftCircleFill className="md:block hidden text-4xl z-10 cursor-pointer hover:text-white" onClick={prevSlide} />
      <div>
        {slides.map((slide, index) => {
          return (
            <div key={index} className={`${index === current ? "opacity-100 duration-500 scale-[1.08]" : "opacity-0 duration-1000 ease-in"}`}>
              {index === current && (
                <img
                  src={slide}
                  className="xl:w-[700px] lg:w-[500px] medheight:w-[250px] lowheight:w-[200px] w-[300px] rounded-xl my-12 mx-auto"
                  onDragStart={(e) => e.preventDefault()}
                  {...swipeHandler}
                />
              )}
            </div>
          );
        })}
      </div>
      <BsFillArrowRightCircleFill className="md:block hidden text-4xl z-10 cursor-pointer hover:text-white" onClick={nextSlide} />
    </div>
  );
}

export default ImageSlider;
