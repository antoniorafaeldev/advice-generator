export async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice")
    const advice = await response.json()
    console.log(advice)
    changeAdvice(advice)
    changeAdviceNumber(advice)
}

function changeAdvice(advice){
    const adviceElement = document.getElementById("advice")
    adviceElement.textContent = `"${advice.slip.advice}"`
}

function changeAdviceNumber(advice){
    const numberElement = document.getElementById("advice-number")
    numberElement.textContent = `ADVICE #${advice.slip.id}`
}