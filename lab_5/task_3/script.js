let title = document.querySelector(".title");
let nextBtn = document.querySelector(".next");
let taskContainer = document.querySelector(".task");
let result = document.querySelector(".result");

let totalCount = 0;
let rightCount = 0;
let task = {
    first: null,
    secound: null,
    operation: "*",
    result: null,
    selected: null,
  }


const GenerateTask = () => {

  task.first = Math.floor(Math.random() * 10);
  task.secound = Math.floor(Math.random() * 10);
  task.result = task.first * task.secound;

  const taskTitle = document.createElement("p");
  taskTitle.innerText = task.first + ` ${task.operation} ` + task.secound + " = ";
  taskContainer.appendChild(taskTitle);

  for (let i = 0; i < 4; i++) {
    let asnwerLabel = document.createElement("label");
    let temp = Math.floor(Math.random() * 20)
    asnwerLabel.innerText = i == 3 ? task.result : temp;

    let answerInput = document.createElement("input");
    answerInput.value = i == 3 ? task.result : temp;
    answerInput.type = "radio";
    answerInput.addEventListener("click", (e) => inputClickHandler(e));

    asnwerLabel.appendChild(answerInput);
    taskContainer.appendChild(asnwerLabel);
  }

  const inputClickHandler = (e) => {
    task.selected = +e.target.value;
    const radioButtons = taskContainer.querySelectorAll('input[type="radio"]');

    for (const radioButton of radioButtons) {
      radioButton.checked = false;
    }
    e.target.checked = true;
  }
}
GenerateTask();

nextBtn.addEventListener('click', (e) => {
  e.preventDefault();
  taskContainer.innerHTML = "";

  totalCount++;
  task.selected == task.result ? rightCount++ : null;
  result.innerText = task.selected == task.result ? "ви відповіли правильно" : `Правильна відповідь була ${task.result}`;
  GenerateTask();

  title.innerHTML = `<h1>Загальний рахунок ${(Math.floor((rightCount / totalCount) * 100)|| 0) + "%"} (${rightCount} з ${totalCount})</h1>`;
})