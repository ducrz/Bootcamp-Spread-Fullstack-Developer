function filtraPares(arr) {
    return arr.filter(callback);
}
function filtraImpares(arr) {
    return arr.filter(callbackImpares);
}


function callback(item) {
    return item % 2 === 0;
}

function callbackImpares(item) {
    return item % 2 !== 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray));

console.log(filtraImpares(meuArray));


