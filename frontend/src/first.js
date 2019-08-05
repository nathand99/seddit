import {login_page} from './login.js';
import {signup_page} from './signup.js';

export function first_page() {
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

    const body = document.createElement("body");
    body.setAttribute("id", "feed");
    const h3 = document.createElement("h3");
    h3.innerHTML = "Post";
    body.appendChild(h3);
    root.appendChild(body);

    login.addEventListener('click', (event) => {
        login_page();
    });

    signup.addEventListener('click', (event) => {
        signup_page();
    });
}