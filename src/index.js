import { loadHomeContent } from "./load-home"
import {createMenu } from "./menu"
import { contactPage } from "./contact"
import "./styles.css";

document.addEventListener('DOMContentLoaded', handleDOMLoad);

function handleDOMLoad() {
    const logo = document.createElement('h1');
    logo.classList.add("logo");
    logo.textContent = "CHRISTINA'S CAFÉ"
    const nav = document.querySelector('nav');
    nav.appendChild(logo);
    loadHomeContent();
    const homeButton = document.getElementById('home-button');
    homeButton.addEventListener('click', ()=>{
        clearContent();
        loadHomeContent();
    });
    const menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', ()=>{
        clearContent();
        createMenu();
    });
    const contactButton = document.getElementById('contact-button');
    contactButton.addEventListener('click', ()=>{
        clearContent();
        contactPage();
    });
}

function clearContent() {
    const content = document.getElementById('content');
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
}