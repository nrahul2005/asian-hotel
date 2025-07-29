const from = document.getElementById("myform");
const form = document.getElementById("message");

            
            from.addEventListener("submit"), function(event){
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            }

if (name === "") {
message.style.color = "red";
message.textContent = "Name is required!";
return;
}

if (!email.includes ("@") || !email.includes(".")) {
message.style.color = "red";
message.textContent = "Enter a valid email!";
return;
}

if (password.length < 6) {
message.style.color = "red";
message.textContent = "Password must be at least 6 characters!";
return;
}
// If valid store in localStorage
const userData = {
name: name,
email: email,
password: password
};

// Convert to JSON and save
localStorage.setItem("user", JSON.stringify(userData));

message.style.color = "green";
message.textContent = "User registered and saved in Local Storage!";

from.rset();
