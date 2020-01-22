function changeVocals (str) {
    function include(char, arr){
        for(let i=0; i<arr.length; i++){
            if(char==arr[i]){
                return true
            }
        }
        return false
    }
    function find(char,aplhabet_arr){
        for(let i=0; i<aplhabet_arr.length; i++){
            if(char==aplhabet_arr[i]){
                return i
            }
        }
        return -1
    }
    var vocal = ['a','i','u','e','o']
    var alphabet = 'abcdefghijklmnopqrstuvwxyza'
    var aplhabet_arr = []
    for(let element of alphabet){
        aplhabet_arr.push(element)
    }
    var str_arr = []
    for(let i=0; i<str.length; i++){
        str_arr.push(str[i])
    }
    for(let i=0; i<str_arr.length; i++){
        if( str[i]==str_arr[i].toUpperCase() && include(str[i].toLowerCase(), vocal) ){
            str_arr[i] = aplhabet_arr[find(str[i].toLowerCase(),aplhabet_arr) + 1].toUpperCase()
        }else if( str[i]==str_arr[i].toLowerCase() && include(str[i].toLowerCase(), vocal) ){
            str_arr[i] = aplhabet_arr[find(str[i],aplhabet_arr) + 1]
        }
    }
    var result = ''
    for(let el of str_arr){
        result += el
    }
    return result
}

function reverseWord (str) {
    var result = ''
    for(let i=str.length-1; i>=0; i--){
        result += str[i]
    }
    return result
}

function setLowerUpperCase (str) {
    var result_arr = []
    for(let i=0; i<str.length; i++){
        if(str[i]==str[i].toUpperCase()){
            result_arr.push(str[i].toLowerCase())
        }else if(str[i]==str[i].toLowerCase()){
            result_arr.push(str[i].toUpperCase())
        }
    }
    var result = ''
    for(let i=0; i<result_arr.length; i++){
        result += result_arr[i]
    }
    return result
}

function removeSpaces (str) {
    var result_arr = []
    var temp = ''
    for(let i=0; i<str.length; i++){
        if(str[i]==' '){
            result_arr.push(temp)
            temp = ''
        }else{
            temp += str[i]
        }
    }
    result_arr.push(temp)
    var result = ''
    for(let i=0; i<result_arr.length; i++){
        result += result_arr[i]
    }
    return result
}

function passwordGenerator (name) {
    if(name.length<5){
        return `Minimal karakter yang diinputkan adalah 5 karakter`
    }
    return removeSpaces(setLowerUpperCase(reverseWord(changeVocals (name))))
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'