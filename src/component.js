export default (text = 'Hello, Webpack!') => {
    const element = document.createElement("h1");

    element.innerText = text;
    return element;
}