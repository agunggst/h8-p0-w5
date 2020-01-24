function totalDigitRekursif(angka) {
    function slice(angka){
        var result = ''
        for(let i=1; i<String(angka).length; i++){
            result += String(angka)[i]
        }
        return result
    }
    
    if(String(angka).length==0){
        return 0
    }else{
        return Number(String(angka)[0])+totalDigitRekursif(slice(angka))
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5