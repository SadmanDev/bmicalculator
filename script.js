const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const calculate = document.querySelector("#calculate");
const yourBMI = document.querySelector("#yourBMI");

calculate.addEventListener("click", () => {
    if (height.value != "" && weight.value != "") {
        let bmiValue = weight.value / (height.value * height.value) * 10000;
        yourBMI.innerHTML = `Your BMI is : <span>${bmiValue}</span>`;
    }else{
        yourBMI.innerHTML = `Please Enter Correct Value`;
    }
} )