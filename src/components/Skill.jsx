import React from "react";

function Skill({ name, img, link }) {
  return (
    <div className="flex flex-col justify-center items-center group">
      <a
        href={link}
        onDragStart={(e) => {
          e.preventDefault();
        }}
      >
        <img src={img} alt="" className="skill-img" />
      </a>
      <p className="lg:-mb-16 hidden mt-7 -mb-14 -mx-10 group-hover:block">{name}</p>
    </div>
  );
}

export default Skill;
