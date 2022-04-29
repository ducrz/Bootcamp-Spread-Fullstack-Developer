function mapSemthis(arr) {
    return arr.map(function (item) {
        return item * 2;
    })
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemthis(nums));

// Array original não foi alterado
console.log(nums);