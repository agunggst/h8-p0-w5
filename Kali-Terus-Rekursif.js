function kaliTerusRekursif(angka) {
    var  mul = 1
    for(let i=0; i<String(angka).length; i++){
        mul *= Number(String(angka)[i])
    }
    
    if(String(mul).length==1){
        return mul
    }else{
        return kaliTerusRekursif(mul)
    }
}

console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6