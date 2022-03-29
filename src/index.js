console.log(`Testing testing`);

const content = document.querySelector(`#content`);
const header = document.createElement(`h1`);
header.textContent = `Welcome!`;
content.appendChild(header);
const image = document.createElement(`img`);
image.src = `../src/test.png`
content.appendChild(image);
const para = document.createElement(`p`);
para.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur exercitationem, libero nam nostrum recusandae eum quaerat consequuntur facere ea hic numquam voluptatem porro temporibus qui obcaecati? Accusamus voluptatum minima minus`;
content.appendChild(para);