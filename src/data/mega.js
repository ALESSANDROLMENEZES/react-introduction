
const generateMegaSenaNumbers = qtd => {
    let numbers = [];
    for (let i = 0; i < qtd; i++) {
        let newNumber = parseInt(Math.random() * (60 + 0) - 0);
        if (numbers.indexOf(newNumber) === -1) {
            numbers.push(newNumber);
        } else {
            qtd++;
        }
    }
    return numbers.sort((a, b)=> a - b);
};


export default generateMegaSenaNumbers;
