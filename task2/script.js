let result = document.getElementById('result');
let keys = document.getElementsByTagName('button');
keys[0].addEventListener('click', () => {
    result.innerText = "";
});
keys[1].addEventListener('click', () => {
    result.innerText += '1';
});
keys[2].addEventListener('click', () => {
    result.innerText += '2';
});
keys[3].addEventListener('click', () => {
    result.innerText += '3';
});
keys[4].addEventListener('click', () => {
    result.innerText += '+';
});
keys[5].addEventListener('click', () => {
    result.innerText += '4';
});
keys[6].addEventListener('click', () => {
    result.innerText += '5';
});
keys[7].addEventListener('click', () => {
    result.innerText += '6';
});
keys[8].addEventListener('click', () => {
    result.innerText += '-';
});
keys[9].addEventListener('click', () => {
    result.innerText += '7';
});
keys[10].addEventListener('click', () => {
    result.innerText += '8';
});
keys[11].addEventListener('click', () => {
    result.innerText += '9';
});
keys[12].addEventListener('click', () => {
    result.innerText += '*';
});
keys[13].addEventListener('click', () => {
    result.innerText += '%';
});
keys[14].addEventListener('click', () => {
    result.innerText += '0';
});
keys[15].addEventListener('click', () => {
    result.innerText += '/';
});
keys[16].addEventListener('click', () => {
    let calc = result.innerText;
    let n1, n2, op;
    console.log(typeof (n1));
    let ophave = 0;
    for (let i = 0; i < calc.length; i++) {
        if (calc[i] == '+' || calc[i] == '-' || calc[i] == '*' || calc[i] == '/' || calc[i] == '%') {
            op = calc[i];
            ophave++;
        }
        else if (ophave > 0) {
            if (n2 == undefined) {
                n2 = calc[i];
            }
            else {
                n2 += calc[i];
            }
        }
        else {
            if (n1 == undefined) {
                n1 = calc[i];
            }
            else {
                n1 += calc[i];
            }
        }
    }
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    calc.innerText = n1 + n2;
    switch (op) {
        case '+':
            result.innerHTML = (n1 + n2);
            break;
        case '-':
            result.innerHTML = (n1 - n2);
            break;
        case '*':
            result.innerHTML = (n1 * n2);
            break;
        case '/':
            result.innerHTML = (n1 / n2);
            break;
        case '%':
            result.innerHTML = (n1 % n2);
            break;
        default:
            break;
    }

});