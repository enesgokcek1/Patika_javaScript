//Form submit not default

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener("submit", formSubmit)

function formSubmit(event)
{
    event.preventDefault() // We blocked the default process
    console.log("The process was completed")
    let scoreInputDOM = document.querySelector("#score")
    console.log(scoreInputDOM.value)
    localStorage.setItem("score", scoreInputDOM.value)

}

