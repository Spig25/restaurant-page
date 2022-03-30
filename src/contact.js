export default function contact() {
    const content = document.querySelector(`#content`)
    content.innerHTML = ``

    const header = document.createElement(`h1`);
    header.textContent = `Contact`;
    content.appendChild(header);

    const para = document.createElement(`p`);
    para.classList.add(`para`);
    para.textContent = `Contact these real people! This contact page is built using a exported javascript file.`;
    content.appendChild(para);
    
    const div = document.createElement(`div`)
    div.textContent = `Email - sushichef@github.com`
}