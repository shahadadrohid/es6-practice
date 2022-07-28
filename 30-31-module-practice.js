const myName = 'Md Shahadad Hossain';
const oddNumber = [1, 3, 5, 6, 8];

let myWeigth = 58;

const company = {
    name: 'Aschii',
    ceo: {
        name: 'Md Shahadad Hossain',
        position: 'Cheif Executive Officer',
        favouriteFood: 'Alur Bhorta'
    }
}

const templateString = `Assalamualaikum my name is ${myName}, my weight is ${myWeigth}, i have parcle delivery service company name ${company.name}, and i am the ${company.position} of this company.`;

const dividedBy5 = num => num / 5;
console.log(dividedBy5(50));

const doubleIt = (n1, n2) => (n1 + 2) * (n2 + 2);
console.log(doubleIt(4, 8));

const threeParameter = (number1, number2, number3) => {
    const multiplyThreeNum = number1 * number2 * number3;
    return multiplyThreeNum
};
console.log(threeParameter(2, 4, 8));

const doubleParameter = (num1, num2) => {
    const firstNum = num1 + 2;
    const secondNum = num2 + 2;
    const multiply = firstNum * secondNum;
    return multiply;
}
console.log(doubleParameter(2, 4));

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = array.map(a => a * 5);
console.log(output);

const arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const oddNumberFilter = arr.filter(a => a % 2 != 0);
console.log(oddNumberFilter);

const products = [
    { name: 'Processor', price: 17000 },
    { name: 'cooler', price: 7000 },
    { name: 'ram', price: 5000 },
    { name: 'mouse', price: 4000 },
    { name: 'matheboard', price: 8000 },
    { name: 'hub', price: 1000 },
];
const fiveThousandTaka = products.find(product => product.price == 5000);
console.log(fiveThousandTaka);

const company1 = {
    name: 'Aschii',
    position: {
        ceo: 'Md Shahadad hossain',
        cto: 'Mr hamid'
    },
    tech: {
        technology: 'React',
        employee: 2000,
        workOn: 'New system'
    }
};

const employee = company1.tech.employee;
console.log(employee);

// const friends = ['Shahadad', 'Rafi', 'Nayon']
const [one, two, three] = ['Shahadad', 'Rafi', 'Nayon'];
console.log(three)

const threeNum = (num1, num2, num3 = 7) => num1 + num2 + num3;
console.log(threeNum(2, 5))
