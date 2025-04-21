const inputSlider = document.querySelector("[data-lenghtSlider]");
const lenghtSliderVal = document.querySelector("[data-lengthCont]");

const displayPass = document.querySelector("[data-DisplayPass]");
const copyBtn = document.querySelector(".copy-btn");
const copyMassage = document.querySelector("[data-copyMsg]");
const uppCaseCheck = document.querySelector("#uppercase");
const lowerCaseCheck = document.querySelector("#lowerCase");
const numCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const passIndicator = document.querySelector("[data-indicator]");
const generatePassBtn = document.querySelector(".generate-pass");
const allCheckbox = document.querySelectorAll("input[type=checkbox]")


let password = "";
let passLength = 10;
let checkCount = 0;

handleSlider();

setIndicator("#ccc")

function handleSlider() {
    inputSlider.value = passLength;
    lenghtSliderVal.innerText = passLength;

}
// inputSlider.oninput= ()=> {lenghtSliderVal.innerHTML = inputSlider.value;}

function setIndicator(color) {
    passIndicator.style.backgroundColor = color;
    passIndicator.style.boxShadow=`0px 0px 12px 1px ${color}`;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomNum() {
    return getRandomInt(0, 10)
}

function getRandUpperCase() {
    return String.fromCharCode(getRandomInt(65, 91));
}


function getRandLowerCase() {
    return String.fromCharCode(getRandomInt(97, 123));
}

function getRandChar() {
    let char = [];
    for (let i = 33; i < 48; i++) {
        char.push(String.fromCharCode(i));
    }
    for (let i = 58; i < 65; i++) {
        char.push(String.fromCharCode(i));
    }
    for (let i = 91; i < 97; i++) {
        char.push(String.fromCharCode(i));
    }
    for (let i = 123; i < 127; i++) {
        char.push(String.fromCharCode(i));
    }
    let Randindex = getRandomInt(0, char.length);
    return char[Randindex];
}

function calStrength() {
    let hasUpp = false;
    let hasLow = false;
    let hasNum = false;
    let hasChar = false;

    if (uppCaseCheck.checked) hasUpp = true;
    if (lowerCaseCheck.checked) hasLow = true;
    if (numCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasChar = true;

    if (hasUpp && hasLow && (hasLow || hasChar) && passLength >= 8) {
        setIndicator("#0f0")
    } else if ((hasUpp || hasLow) && (hasChar || hasNum) && passLength >= 6) {
        setIndicator("#ff0")
    } else {
        setIndicator("#f00")
    }
}

async function copyPass() {
    try {
        await navigator.clipboard.writeText(displayPass.value);
        copyMassage.innerText = "Copied";

    }
    catch (e) {
        console.log(e);
        copyMassage.innerText = "Failed";
    }

    copyMassage.classList.add("active");
    setTimeout(() => {
        copyMassage.classList.remove("active");
    }, 2000);

}


function shufflePassword(password) {
    let arr = password.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckbox.forEach((checkbox) => {
        if (checkbox.checked) {
            checkCount++;
        }
    })

    if (passLength < checkCount) {
        passLength = checkCount;
        handleSlider();
    }
}

allCheckbox.forEach((checkbox) => {

    checkbox.addEventListener('change', handleCheckBoxChange)

});

inputSlider.addEventListener('input', (e) => {
    passLength = e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click', () => {
    if (displayPass.value) {
        copyPass();
    }
})

generatePassBtn.addEventListener('click', () => {
    generatePassword();
})


function generatePassword() {

    password = "";

    let funcSArr = [];


    if (uppCaseCheck.checked) {
        funcSArr.push(getRandUpperCase);
    }
    if (lowerCaseCheck.checked) {
        funcSArr.push(getRandLowerCase);
    }
    if (numCheck.checked) {
        funcSArr.push(getRandomNum);
    }
    if (symbolsCheck.checked) {
        funcSArr.push(getRandChar);
    }


    for (let i = 0; i < funcSArr.length; i++) {
        password += funcSArr[i]();
    }

    for (let i = 0; i < passLength - funcSArr.length; i++) {
        let rendIndex = getRandomInt(0, funcSArr.length);
        password += funcSArr[rendIndex]();
    }



    password = shufflePassword(password);
    displayPass.value = password;
    calStrength();
}