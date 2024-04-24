const userHeight = document.querySelector(".heightInput")
const userWeight = document.querySelector(".weightInput")
const btn=document.querySelector(".btn")
const result= document.querySelector(".result")

function submit() {
    let height = parseInt(userHeight.value)
    let weight = parseInt(userWeight.value)
    // console.log(height)
    // console.log(weight)
    validateInput(height,weight)
    userHeight.value=" "
    userWeight.value=" "
}
function validateInput(height,weight){
    if(Number.isInteger(height) && Number.isInteger(weight))
        calculateBMI(height,weight)
    else
        result.innerHTML=`Invalid Input !!`
}
function calculateBMI(height,weight){
    let calHeight=Math.pow((height/100),2)
    // console.log(calHeight)
    let bmi=weight/calHeight
    printResult(bmi)
}
function printResult(bmi){
    result.innerHTML=`BMI : ${bmi.toFixed(2)}kg/m2`
}