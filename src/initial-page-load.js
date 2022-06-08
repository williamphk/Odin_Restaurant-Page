import { homejs } from "./home";
import { menujs } from "./menu";
import { contactjs } from "./contact";

const body = document.querySelector("body");
const content = document.querySelector("#content");
const header = document.createElement("header");
header.innerHTML = `
    <h1>スシコー</h1>
    <nav>
        <a id="home-nav" class="page">Home</a>
        <a id="menu-nav" class="page">Menu</a>
        <a id="contact-nav" class="page">Contact</a>
    </nav>
`;
body.insertBefore(header, content);
homejs();

const home = document.getElementById("home-nav");
home.addEventListener("click", homejs);
const menu = document.getElementById("menu-nav");
menu.addEventListener("click", menujs);
const contact = document.getElementById("contact-nav");
contact.addEventListener("click", contactjs);
