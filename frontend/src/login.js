export function login_page() {
    // destroy the page
    const root = document.querySelector("#root");
    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
    const div1 = document.createElement("div");
    root.appendChild(div1);
    const h1 = document.createElement("h1");
    const title = document.createTextNode("Log in to your account");
    h1.appendChild(title);
    div1.appendChild(h1);
    const label1 = document.createElement("label");
    const username = document.createTextNode("Username");
    label1.appendChild(username);
    div1.appendChild(label1);
    const input1 = document.createElement("input");
    div1.appendChild(input1);

    const div2 = document.createElement("div");
    root.appendChild(div2);
    const label2 = document.createElement("label");
    const password = document.createTextNode("Password");
    label2.appendChild(password);
    div2.appendChild(label2);
    const input2 = document.createElement("input");
    input2.setAttribute("class", "password")
    div2.appendChild(input2);

    const submit = document.createElement("button");
    submit.setAttribute("class", "button");
    const button = document.createTextNode("Submit");
    submit.appendChild(button);
    root.appendChild(submit);

    submit.addEventListener('click', (event) => {
        const BASE_URL = 'https://api.wheretheiss.at/v1';
        const output = document.getElementById('output');
        const locationUri = `${BASE_URL}/satellites/25544`;

        fetch(locationUri)
        .then(r => r.json())
        .then(r => {
      const { latitude, longitude } = r;
      const coUri = `${BASE_URL}/coordinates/${latitude},${longitude}`;
      return fetch(coUri);
    })
    });
}