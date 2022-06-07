import { homejs } from "./home";
import "./menu";
import "./contact";

const body = document.querySelector("body");
const content = document.querySelector("#content");
const header = document.createElement("header");
header.innerHTML = `
    <nav>
        <a id="home-nav" class="page">Home</a>
        <a id="menu-nav" class="page">Menu</a>
        <a id="contact-nav" class="page">Contact</a>
    </nav>
`;
body.insertBefore(header, content);

const home = document.getElementById("home-nav");
home.addEventListener("click", homejs);
