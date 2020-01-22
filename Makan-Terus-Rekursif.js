function makanTerusRekursif(waktu, count=0) {
    if(waktu<=0){
        return count
    }else{
        count++
        return makanTerusRekursif(waktu-15, count)
    }
}

console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1