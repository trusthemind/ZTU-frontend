const body = document.querySelector("body")

const createContainer = () => {
    let div = document.createElement("div")
    div.classList.add("container");
    return div;
}

const createForm = () => {
    let form = document.createElement("form")
    form.style.width = "400px"

    body.appendChild(form)

    let logincontainer = createContainer();
    let login = document.createElement("label")
    login.innerText = "login";

    logincontainer.appendChild(login)
    logincontainer.appendChild(document.createElement("input"))

    let passwordconitaner = createContainer()
    let password = document.createElement("label")
    let passwordInput = document.createElement("input")
    passwordInput.setAttribute('type', 'password')
    password.innerHTML = "password"

    passwordconitaner.appendChild(password)
    passwordconitaner.appendChild(passwordInput)

    let repeatPasswordContainer = createContainer()
    let repeatPassword = document.createElement("label")
    let repeatPasswordInput = document.createElement("input")
    repeatPasswordInput.setAttribute('type', 'password')
    repeatPassword.innerText = "repeat password";

    repeatPasswordContainer.appendChild(repeatPassword)
    repeatPasswordContainer.appendChild(repeatPasswordInput)

    let gendercontainer = createContainer();
    let genderlabel = document.createElement("label")
    genderlabel.innerText = "gender :";
    let men = document.createElement("label")
    let women = document.createElement("label")
    let radio = document.createElement("input")
    let radio2 = document.createElement("input")
    radio.setAttribute('type', 'radio')
    radio2.setAttribute('type', 'radio')
    men.innerHTML = "men";
    women.innerHTML = "women";
    men.appendChild(radio)
    women.appendChild(radio2)
    gendercontainer.appendChild(genderlabel)
    gendercontainer.appendChild(men)
    gendercontainer.appendChild(women)


    let selectcontainer = createContainer();
    let select = document.createElement("select")
    let zhytomyroption = document.createElement("option")
    zhytomyroption.innerText = "Zhytomyr";
    zhytomyroption.setAttribute('value', 'Zhytomyr')
    let kyivoption = document.createElement("option")
    kyivoption.innerText = "Kyiv";
    kyivoption.setAttribute('value', 'Kyiv')
    let lvivoption = document.createElement("option")
    lvivoption.innerText = "Lviv";
    lvivoption.setAttribute('value', 'Lviv')

    select.appendChild(zhytomyroption)
    select.appendChild(kyivoption)
    select.appendChild(lvivoption)
    selectcontainer.appendChild(select);

    let interestscontainer = createContainer()
    let soccerinterest = document.createElement("label")
    soccerinterest.innerText = "Soccer"
    let soccerinput = document.createElement("input")
    soccerinput.setAttribute('type', 'checkbox')
    soccerinterest.appendChild(soccerinput)

    let chessinterest = document.createElement("label")
    chessinterest.innerText = "Chess"
    let chessinput = document.createElement("input")
    chessinput.setAttribute('type', 'checkbox')
    chessinterest.appendChild(chessinput)

    let drawinginterest = document.createElement("label")
    drawinginterest.innerText = "Drawing"
    let drawinginput = document.createElement("input")
    drawinginput.setAttribute('type', 'checkbox')
    drawinginterest.appendChild(drawinginput)

    let musicinterest = document.createElement("label")
    musicinterest.innerText = "Music"
    let musicinput = document.createElement("input")
    musicinput.setAttribute('type', 'checkbox')
    musicinterest.appendChild(musicinput)


    let buttoncontainer = document.createElement("div")
    buttoncontainer.classList.add("button-container")
    //buttons
    let resetButton = document.createElement("button")
    resetButton.innerText = "Reset"
    resetButton.setAttribute('type', 'reset')

    let submitButton = document.createElement("button")
    submitButton.innerText = "Submit"
    submitButton.setAttribute('type', 'submit')

    buttoncontainer.appendChild(resetButton)
    buttoncontainer.appendChild(submitButton)



    interestscontainer.appendChild(soccerinterest)
    interestscontainer.appendChild(chessinterest)
    interestscontainer.appendChild(drawinginterest)
    interestscontainer.appendChild(musicinterest)

    form.appendChild(logincontainer);
    form.appendChild(passwordconitaner);
    form.appendChild(repeatPasswordContainer);
    form.appendChild(gendercontainer);
    form.appendChild(selectcontainer);
    form.appendChild(interestscontainer)
    form.appendChild(buttoncontainer)
}

createForm()