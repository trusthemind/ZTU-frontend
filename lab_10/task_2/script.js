function showImages() {
  const fileInput = document.getElementById('fileInput');
  const imageContainer = document.getElementById('imageContainer');
  const message = document.getElementById('message');

  try {
    const files = JSON.parse(fileInput.value);
    if (!Array.isArray(files)) {
      throw new Error('Input is not a valid JSON array.');
    }
    imageContainer.innerHTML = '';
    files.forEach((file) => {
      const imgElement = document.createElement('img');
      imgElement.src = file.trim();
      imgElement.alt = 'Image';
      imageContainer.appendChild(imgElement);
    });

    message.textContent = 'OK';
    error.textContent = '';
  } catch (err) {
    message.textContent = '';
    error.textContent = err.message;
  }
}
