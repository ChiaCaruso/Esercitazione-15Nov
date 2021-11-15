/**
 * Project rest API endpoint
 */
const API = "https://edgemony-backend.herokuapp.com/todos";

/**
 * Render some content within a container HTML tag
 */
const render = (container, items) => (container.innerHTML = items);

export {API, render};