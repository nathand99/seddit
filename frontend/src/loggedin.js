import {create_feed} from './create_feed.js'
export function logged_in(apiUrl, auth) {
    // delete all children of root (clear the page)
    const root = document.querySelector("#root");
    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
    // create banner
    const header = document.createElement("header");
    header.setAttribute("class", "banner");
    root.appendChild(header);

    const title = document.createElement("h1");
    title.setAttribute("class", "flex-center");
    title.setAttribute("id", "logo");
    title.innerHTML = "Seddit";
    header.appendChild(title);

    // create user's feed
    create_feed(apiUrl, auth);
}