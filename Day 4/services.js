function saveOrder(){
    return new Promise ((resolve , reject) =>{
        setTimeout(()=>{
            resolve("Order saved successfully!");
        },3000)
    })
}

function processPayment(){
    return new Promise ((resolve , reject)=>{
        setTimeout(() => {
            resolve("Payment successfull");
        }, 3000);
    })
}

function sendEmail(){
    return new Promise((resolve , reject )=>{
        setTimeout(() => {
            resolve("Confirmation email sent!")
        }, 3000);
    })
}

module.exports = {
    saveOrder,
    processPayment,
    sendEmail
}