function hapusSimbol(str) {
    var arr = str.match(/[a-zA-Z0-9]+/g)
    var result = ''
    for(let elements of arr){
        result += elements
    }
    return result
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100