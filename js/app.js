import { API } from "../js/utility.js";
import { toDo } from "./todo.js";
import { add } from "./add.js"

document.addEventListener("DOMContentLoaded", () => {
    fetch (API) 
        .then (response => response.json())
        .then ((data) => toDo(data))

    const btn = document.querySelector("#add");
    btn.addEventListener("click", add);
});