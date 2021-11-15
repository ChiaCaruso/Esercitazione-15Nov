import { render, API } from "../js/utility.js";

const add = () => {
    const container = document.querySelector("#form")

    render (container, `<div>
        <h3>Aggiungi un nuovo impegno</h3>
        <form id="create">

            <div class="row">
                <label for="title">Cosa devi fare:</label>
                <textarea id="title" name="title"></textarea>
            </div>

            <div class="row">
                <label for="expires">Quando:</label>
                <input type="date" value="2021-11-15" id="expires" name="expires">
            </div> 

            <button class="btn">Salva impegno</button> 
                               
        </form>
    </div>`);

    const form = document.querySelector("#create");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const newData = {
            title: event.target.title.value,
            expires: event.target.expires.value
        };

        fetch (API, {
            method: 'POST',
            headers: {
                "Content-Type": "application/JSON"
            },            
            body: JSON.stringify(newData)
        })
    });
};

export { add }