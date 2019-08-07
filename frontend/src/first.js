import {login_page} from './login.js';
import {signup_page} from './signup.js';
import { create_feed } from './create_feed.js';

export function first_page(apiUrl) {
    // delete all children of root (clear the page)
    const root = document.querySelector("#root");
    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
    // create a title, login and registration button
    const header = document.createElement("header");
    header.setAttribute("class", "banner");
    root.appendChild(header);

    const title = document.createElement("h1");
    title.setAttribute("class", "flex-center");
    title.setAttribute("id", "logo");
    title.innerHTML = "Seddit";
    header.appendChild(title);

    const seddit = document.createElement("h1");
    seddit.setAttribute("class", "flex-center");
    seddit.innerText = "Seddit";
    seddit.style.paddingRight = "400px";
    seddit.style.fontFamily = "Verdana, Geneva, sans-serif";
    header.appendChild(seddit);
    
    const login = document.createElement("button");
    login.setAttribute("data-id-login", "");
    login.setAttribute("class", "button button-primary");
    login.innerHTML = "Log In";
    header.appendChild(login);

    const signup = document.createElement("button");
    signup.setAttribute("data-id-signup", "");
    signup.setAttribute("class", "button button-primary");
    signup.innerHTML = "Sign up";
    header.appendChild(signup);

    // create feed as a public user
    create_feed(apiUrl, "");

    login.addEventListener('click', (event) => {
        login_page(apiUrl);
    });

    signup.addEventListener('click', (event) => {
        signup_page(apiUrl);
    });
}