export default function homePage() {
    const content = document.querySelector(`#content`)
    content.innerHTML = ``

    const header = document.createElement(`h1`);
    header.textContent = `Spig's Sushi!`;
    content.appendChild(header);

    const para = document.createElement(`p`);
    para.classList.add(`para`);
    para.textContent = `This is a simple project to learn webpack! This home page is built using a exported javascript file.`;
    content.appendChild(para);

    const image = document.createElement(`img`);
    image.src = `/home/kasey/repos/restaurant-page/src/derek-duran-Jz4QMhLvGgw-unsplash.jpg`
    content.appendChild(image);

    const credit = document.createElement(`div`);
    credit.textContent = `Image credit - DerekDuran https://unsplash.com/photos/Jz4QMhLvGgw`
    content.appendChild(credit);
}