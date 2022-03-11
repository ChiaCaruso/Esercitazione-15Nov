import { render } from "../js/utility.js";

const list = (data) => {
    const elements = data.map (item => `<li>${item.title} - ${item.year}</li>`).join("");

    const container = document.querySelector("#content");
    render(container, `<p>Elenco schede film</p><ul>${elements}</ul>`);
}

export { list };