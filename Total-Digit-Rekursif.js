function totalDigitRekursif(angka, sum=0) {
    var arr = []
    for(let i=0; i<String(angka).length; i++){
        arr.push(String(angka)[i])
    }
    sum += Number(arr[0])
    arr.shift()
    var angka = ''
    for(let i=0; i<arr.length; i++){
        angka += arr[i]
    }
    
    if(angka.length==0){
        return sum
    }else{
        return totalDigitRekursif(Number(angka), sum)
    }
}

console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
console.log(totalDigitRekursif(0)); // 0