import { render } from "./utility.js";

const toDo = (data) => {
    const elements = data.map(item => `<li>To Do: ${item.title} - Entro il: ${item.expires}</li>`)  .join(" ");

    const container = document.querySelector("#items");
    render(container, `
        <h3>Cose da fare:</h3>
        <ul>${elements}</ul>`
        );
}

export { toDo };