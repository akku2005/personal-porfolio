import bg1 from "../data/images/ChatApp.jpg"
import porfolioImage from "../data/images/porfolio.jpg"
import evDashboard from "../data/images/EvDashboard.jpg"
import reactIcons from "../../svg/reactjs.svg"
import tailwindIcons from "../../svg/tailwindcsssvg.svg"
import mongodbIcons from "../../svg/mongo-svg.svg"
import javascriptIcons from "../../svg/javascriptsvg.svg"
import typeScriptIcons from "../../svg/typescriptsvg.svg"
import IconsNext from "../../svg/icons8-nextjs-480.png"
import cssIcons from "../../svg/css-3svg.svg"
import framerIcon from "../../svg/framer.svg"
import nodeIcon from "../../svg/nodejs-icon.svg"
import scssIcon from "../../svg/scss.svg"
export const projects = [
  {
    id: 1,
    title: "Personal Portfolio Design",
    des: "Build my own personal portfolio design using Framer , Next.js , Typescript and Tailwind",
    img: porfolioImage,
    iconLists: [typeScriptIcons, IconsNext,framerIcon, tailwindIcons, cssIcons],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Chat-Chit-Hub - Chatting Website App ",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: bg1,
    iconLists: [ reactIcons, tailwindIcons, mongodbIcons, javascriptIcons,nodeIcon],
    link: "https://github.com/akku2005/chat-app",
  },
  {
    id: 3,
    title: "Ev Dashboard",
    des: "Build a Ev Dashboard for one of the startup company with major features like adding vehicle details and navigation .",
    img: evDashboard,
    iconLists: [reactIcons, scssIcon, tailwindIcons],
    link: "https://github.com/akku2005/ev_dashboard",
  },
];