const numberBtn = document.querySelectorAll(".number"),
    result = document.querySelector("#numResult"),
    operationBtn = document.querySelectorAll(".op"),
    equalBtn = document.querySelector(".equals"),
    cancelBtn = document.querySelector("#acBtn");
let firstNumChecker = true;
let res;
let numArr = [];
let opArr = [];

function swap(arr, sw1, sw2) {
    let temp;
    temp = arr[sw1];
    arr[sw1] = arr[sw2];
    arr[sw2] = temp;
    return arr
}

function paintNumber(event) {
    if (firstNumChecker) {
        result.innerHTML = "";
        firstNumChecker = false;
    }
    const tg = event.target;
    result.innerHTML += tg.innerHTML;
    res = parseInt(result.innerHTML);
    numArr.push(res);
}

function ansFn() {
    if (opArr.length === 1) {
        console.log(opArr);
        return;
    }
    console.log(opArr);
    opArr.push(numArr[numArr.length - 1]);
    operateFn(opArr);
    let answer = opArr[3];
    opArr.splice(0, opArr.length - 1);
    if (
        opArr[0] === "+" ||
        opArr[0] === "-" ||
        opArr[0] === "*" ||
        opArr[0] === "/"
    ) {
        opArr.splice(0, 1);
        opArr.push(answer);
    }
    //opArr.push(answer);
}

function operateFn(tg) {
    let ans;
    let temp;
    switch (tg[1]) {
        case "+":
            ans = tg[0] + tg[2];
            result.innerHTML = ans;
            tg.push(ans);
            tg.push("+");
            if (tg[1] !== "+" || tg[1] !== "-" || tg[1] !== "*" || tg[1] !== "/") {
                swap(tg, 1, 2);
                // temp = tg[1];
                // tg[1] = tg[2];
                // tg[2] = temp;
            }
            break;
        case "-":
            ans = tg[0] - tg[2];
            result.innerHTML = ans;
            tg.push(ans);
            tg.push("-");
            if (tg[1] !== "+" || tg[1] !== "-" || tg[1] !== "*" || tg[1] !== "/") {
                swap(tg, 1, 2);
                // temp = tg[1];
                // tg[1] = tg[2];
                // tg[2] = temp;
            }
            break;
        case "*":
            ans = tg[0] * tg[2];
            result.innerHTML = ans;
            tg.push(ans);
            tg.push("*");
            if (tg[1] !== "+" || tg[1] !== "-" || tg[1] !== "*" || tg[1] !== "/") {
                swap(tg, 1, 2);
                // temp = tg[1];
                // tg[1] = tg[2];
                // tg[2] = temp;
            }
            break;
        case "/":
            ans = tg[0] / tg[2];
            result.innerHTML = ans;
            tg.push(ans);
            tg.push("/");
            if (tg[1] !== "+" || tg[1] !== "-" || tg[1] !== "*" || tg[1] !== "/") {
                swap(tg, 1, 2);
                // temp = tg[1];
                // tg[1] = tg[2];
                // tg[2] = temp;
            }
            break;
        default:
            break;
    }
    return tg;
}

function operatePaint(event) {
    const tg = event.target.innerHTML;
    if (opArr.length === 1) {
        opArr.push(tg);
    } else {
        opArr.push(numArr[numArr.length - 1]);
        opArr.push(tg);
    }

    console.log(opArr);
    res = 0;
    if (opArr.length >= 3) {
        opArr = operateFn(opArr);
        let tmp;
        if (opArr[2] !== opArr[3]) {
            swap(opArr, 3, 5);
            // tmp = opArr[3];
            // opArr[3] = opArr[5];
            // opArr[5] = tmp;
        }
        opArr = opArr.slice(4, 7);
        console.log(opArr);
    }

    firstNumChecker = true;
}

function clearFn(event) {
    result.innerHTML = 0;
    opArr.splice(0, opArr.length);
    //console.log(opArr);
    firstNumChecker = true;
}

for (let i = 0; i < numberBtn.length; i++) {
    numberBtn[i].addEventListener("click", paintNumber);
}
for (let i = 0; i < operationBtn.length; i++) {
    operationBtn[i].addEventListener("click", operatePaint);
}

equalBtn.addEventListener("click", ansFn);
cancelBtn.addEventListener("click", clearFn);
