function square(num){
    return num*num;
}

function cube(num){
    return num*num*num;
}

function isEven(num){
    if(num % 2 == 0){
        return "Number is Even"
    }else{
        return "Number is Odd"
    }
}

module.exports = {
    square,
    cube,
    isEven
}