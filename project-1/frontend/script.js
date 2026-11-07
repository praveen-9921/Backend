const signupform = document.getElementById("signupForm");

if (signupform) {
     signupform.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        const response = await fetch("/register", {
            method:"POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name,
                email,
                password
            })

        });
        const data = await response.json();
        const message = document.getElementById("message");
        message.innerText = data.message;

        message.style.color = response.ok ? "green" : "red";

        if (response.ok) {
            signupform.reset();
        }
    })
}


// LOGIN

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const response = await fetch("/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                password
            })

        });

        const data = await response.json();

        const message = document.getElementById("message");

        message.innerText = data.message;

        message.style.color = response.ok ? "green" : "red";

        if (response.ok) {
            loginForm.reset();
        }

    });

}