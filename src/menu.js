export default function menu() {
    const content = document.querySelector(`#content`)
    content.innerHTML = ``

    const header = document.createElement(`h1`);
    header.textContent = `Menu`;
    content.appendChild(header);

    const para = document.createElement(`p`);
    para.classList.add(`para`);
    para.textContent = `Here is a menu with wonderful items! This menu page is built using a exported javascript file.`;
    content.appendChild(para);

    const cali = document.createElement(`div`)
    cali.textContent = `California Roll $6 - Imitiation crab, avocado`
    content.appendChild(cali);
}