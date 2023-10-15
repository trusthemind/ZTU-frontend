class MultiplyTask {
    constructor(a, b) {
      this.a = a || Math.ceil(Math.random() * 8) + 1;
      this.b = b || Math.ceil(Math.random() * 8) + 1;
    }
 
    get answer() {
      return this.a * this.b;
    }
 
    test(x) {
      return this.answer === x;
    }
 
    toString() {
      return `${this.a} * ${this.b}`;
    }
  }
 
  class App {
 
    constructor(Task) {
      this.Task = Task;
      this.score = 0;
      this.total = 0;
      this.newTask();
    }
 
    newTask() {
      this.task = new this.Task();
      this.generateAnswers();
    }
 
    generateAnswers() {
      const answer = this.task.answer;
      const answers = [];
 
      while (answers.length < 4 - 1) {
        const random = Math.ceil(Math.random() * 98) + 1;
 
        if (random === answer || answers.includes(random)) {
          continue;
        }
 
        answers.push(random);
      }
 
      answers.splice(Math.floor(Math.random() * (answers.length + 1)), 0, answer);
      this.answers = answers;
    }
 
    test(x) {
      const result = this.task.test(x);
      this.total += 1;
      this.score += result ? 1 : 0;
 
      return result;
    }
  }
 
  class AppView {
    constructor(params) {
      const root = document.querySelector(params.el);
 
      this.html = {
        root,
        score: root.querySelector('.score'),
        task: root.querySelector('.task'),
        answers: root.querySelector('.answers ul'),
        newTaskBtn: root.querySelector('#new-task')
      }
 
      this.answer = null;
      this.app = params.app;
      this.bindHandlers();
      this.newTask();
    }
 
    bindHandlers() {
      this.html.answers.addEventListener('change', this.onChange);
      this.html.newTaskBtn.addEventListener('click', this.onNewTaskClick);
    }
 
    onChange = e => {
      if (this.answer === null) {
        const value = parseInt(e.target.value);
        this.answer = value;
        this.app.test(value);
        this.html.newTaskBtn.disabled = false;
      }
 
      this.render();
    }
 
    onNewTaskClick = e => {
      if (this.answer === null) {
        return;
      }
 
      e.target.disabled = true;
      this.newTask();
    }
 
    newTask() {
      this.answer = null;
      this.app.newTask();
      this.render();
    }
 
    render() {
      this.renderScore();
      this.renderTask();
      this.renderAnswers();
    }
 
    renderScore() {
      const {
        score,
        total
      } = this.app;
 
      if (total === 0) {
        return this.html.score.textContent = 'Загальний рахунок 0% (0 правильних відповідей з 0)';
      }
 
      const percent = Math.round(score / total * 100);
      this.html.score.textContent = `Загальний рахунок ${percent}% (${score} правильних відповідей з ${total})`
    }
 
    renderTask() {
      this.html.task.textContent = this.app.task.toString() + ' =';
    }
 
    renderAnswers() {
      this.html.answers.innerHTML = this.app.answers.map(answer => {
        const checked = this.answer === answer ? 'checked' : '';
 
        return `
          <li>
            <label>
                <input type="radio" name="answer" value="${answer}" ${checked}>${answer}
            </label>
          </li>
        `
      }).join('');
    }
  }
 
  new AppView({
    el: '#app',
    app: new App(MultiplyTask)
  });
 