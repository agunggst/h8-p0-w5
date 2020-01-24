function kaliTerusRekursif(angka) {
    if(angka<10){
        return angka
    }else{
        var arr = []
        for(let i=0; i<String(angka).length; i++){
            arr.push(Number(String(angka)[i]))
        }
        var mul = 1
        for(let i=0; i<arr.length; i++){
            mul *= arr[i]
        }
        return kaliTerusRekursif(mul)
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6