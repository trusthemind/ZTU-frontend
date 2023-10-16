const inputs = document.querySelector("#inputs-container");

const square = document.createElement("div");
square.style.width = "100px";
square.style.height = "100px";
square.style.backgroundColor = "blue";
square.style.position = "absolute";
square.style.left = "50%";
square.style.top = "15%";
document.body.appendChild(square);

const widthRange = document.createElement("input");
widthRange.type = "range";
widthRange.min = 100;
widthRange.max = 500;
widthRange.value = 100;
const widthLabel = document.createElement("label");
widthLabel.innerText = "width";
widthLabel.appendChild(widthRange);
const spanWidthValue = document.createElement("span");
widthLabel.appendChild(spanWidthValue);
inputs.appendChild(widthLabel);

const heightRange = document.createElement("input");
heightRange.type = "range";
heightRange.min = 100;
heightRange.max = 500;
heightRange.value = 100;
const heightLabel = document.createElement("label");
heightLabel.innerText = "height";
heightLabel.appendChild(heightRange);
const spanHeightValue = document.createElement("span");
heightLabel.appendChild(spanHeightValue);
inputs.appendChild(heightLabel);

const rotationRange = document.createElement("input");
rotationRange.type = "range";
rotationRange.min = 0;
rotationRange.max = 360;
rotationRange.value = 0;
const rotationLabel = document.createElement("label");
rotationLabel.innerText = "rotation";
rotationLabel.appendChild(rotationRange);
const spanRotationValue = document.createElement("span");
rotationLabel.appendChild(spanRotationValue);
inputs.appendChild(rotationLabel);

document.body.appendChild(inputs);

widthRange.addEventListener("change", () => {
    square.style.width = widthRange.value + "px";
    spanWidthValue.innerText = widthRange.value + "px";
    
});

heightRange.addEventListener("change", () => {
    square.style.height = heightRange.value + "px";
    spanHeightValue.innerText = heightRange.value + "px";
    
});

rotationRange.addEventListener("change", () => {
    square.style.transform = "rotate(" + rotationRange.value + "deg)";
    spanRotationValue.innerText = rotationRange.value + "deg";
});