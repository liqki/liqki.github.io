import React from "react";
import { Link } from "react-router-dom";

// forwarding ref to Link component to turn component into a motion component
const ProjectCard = React.forwardRef((props, ref) => (
  <Link
    ref={ref}
    to={`/projects/${props.id}`}
    className="bg-light text-dark rounded-3xl w-[300px] h-[300px] m-10 shadow-sm text-center transition-shadow duration-300 ease-in shadow-[rgba(255,255,255,0.2)] hover:shadow-[rgba(255,255,255,0.3)]"
    onDragStart={(e) => e.preventDefault()}
  >
    <div style={{ backgroundImage: `url(${props.img})` }} className="rounded-t-2xl w-[100%] h-[200px] bg-center bg-no-repeat bg-cover" />
    <h2 className="text-2xl font-[550] mt-5">{props.name}</h2>
  </Link>
));

export default ProjectCard;
