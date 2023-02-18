import websiteImg1 from "../assets/projectImages/website/img1.png";
import websiteImg2 from "../assets/projectImages/website/img2.png";
import chatImg1 from "../assets/projectImages/chat/img1.png";
import chatImg2 from "../assets/projectImages/chat/img2.png";

export const projects = [
  {
    id: 0,
    name: "Personal Website",
    images: [websiteImg1, websiteImg2],
    description: "The website you are currently on. Built with React and TailwindCSS. Hosted through GH Pages.",
    github: "https://github.com/liqki/liqki.github.io",
  },
  {
    id: 1,
    name: "React Chat",
    images: [chatImg1, chatImg2],
    description: "A simple chat application built with React and TailwindCSS while using Firebase for the backend. Hosted through Firebase.",
    github: "https://github.com/liqki/react-chat",
  },
];
