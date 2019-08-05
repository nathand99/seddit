export function signup_page() {
    // destroy the page
    const root = document.querySelector("#root");
    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
    const div = document.createElement("div");
    root.appendChild(div);
    const h1 = document.createElement("h1");
    const title = document.createTextNode("Create an account");
    h1.appendChild(title);
    div.appendChild(h1);
    
    const label1 = document.createElement("label");
    const username = document.createTextNode("Username");
    label1.appendChild(username);
    div.appendChild(label1);
    const input1 = document.createElement("input");
    div.appendChild(input1);
    
    const div2 = document.createElement("div");
    root.appendChild(div2);
    const label2 = document.createElement("label");
    const password = document.createTextNode("Password");
    label2.appendChild(password);
    div2.appendChild(label2);
    const input2 = document.createElement("input");
    div2.appendChild(input2);

    const submit = document.createElement("button");
    submit.setAttribute("class", "button");
    const button = document.createTextNode("Submit");
    submit.appendChild(button);
    root.appendChild(submit);

}