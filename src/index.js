console.log("whatsupsss");
import { createHomepage } from "./content.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";

const homeTab = document.getElementById("home-tab");
const menuTab = document.getElementById("menu-tab");
const contactTab = document.getElementById("contact-tab");
const contentDiv = document.getElementById("content");

homeTab.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(createHomepage());
});

menuTab.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(createMenu());
});

contactTab.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(createContact());
});

contentDiv.appendChild(createHomepage());

window.addEventListener("load", createHomepage);
