function createUser (name , age , country) {
    return {
        name : name,
        age : age,
        country : country
    }
}

function getUserDetails(user){
    return `Name : ${user.name}, Age : ${user.age} , Country : ${user.country}`;
}

function isAdult(age) {
    if (age >= 18) {
        return "User is Adult"
    }else{
        return "User is Minor"
    }
}

module.exports = {
    createUser,
    getUserDetails,
    isAdult
}