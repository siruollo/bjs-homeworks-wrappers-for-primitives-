'use strict';

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortgageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    let percentPerMonth;
    let contributionNew;
    let amountNew;
    
    if (parseFloat(percent)) {
        percentPerMonth = parseFloat(percent / 100 / 12);
    } else {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`; 
    }

    if (parseInt(contribution) || contribution == 0) {
        contributionNew = (parseInt(contribution)) ? parseInt(contribution) : 0;
    } else {
        return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
    }

    if (parseInt(amount)) {
        amountNew = parseInt(amount);
    } else {
        return `Параметр "Сумма кредита" содержит неправильное значение ${amount}`;
    }


    let today = new Date(); //задаём сегодняшнюю дату
    let dateX = new Date(date);
    let months = parseInt((dateX - today) / (1000 * 3600 * 24 * 30));
    let payToBank = amountNew - contributionNew;
    let paymentPerMonth = payToBank * (percentPerMonth + percentPerMonth / (((1 + percentPerMonth) ** months) - 1));

    let totalAmount = paymentPerMonth * months;


    console.log(totalAmount.toFixed(2));
    return totalAmount.toFixed(2);

}



console.log(calculateTotalMortgage('10','0','50000','12'))
console.log(calculateTotalMortgage('10','1000','50000','12'))
console.log(calculateTotalMortgage('10','0','20000','24'))
console.log(calculateTotalMortgage('10','1000','20000','24'))
console.log(calculateTotalMortgage('10','20000','20000','24'))
console.log(calculateTotalMortgage('10','0','10000','36'))
console.log(calculateTotalMortgage('15','0','10000','36'))


function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {

    if (name === " " || name === 'null' || name === 'undefined' || name === '""' || name === "") { 
        name = 'Аноним'; 
    }

    let greeting = `Привет, мир! Меня зовут ${name}`;
    return greeting;
}

