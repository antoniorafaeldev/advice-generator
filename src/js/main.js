import { getAdvice } from "./fetch.js"

const changeAdviceBtn = document.getElementById("advice-change-button")

changeAdviceBtn.addEventListener("click", getAdvice)

getAdvice()