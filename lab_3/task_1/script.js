const paragraphs = document.querySelectorAll('#paragraphs p');

const lengths = [];
for (const paragraph of paragraphs) {
  lengths.push(paragraph.innerText.length);
}

console.log(lengths);