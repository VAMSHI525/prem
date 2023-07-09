function login(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform simple validation (you can replace it with your own logic)
    if (username === "admin" && password === "password") {
      showWelcomePage(username);
    } else {
      alert("Invalid username or password");
    }
  }
  
  function showWelcomePage(username) {
    // Hide the login form
    document.getElementById("loginForm").classList.add("hidden");
  
    // Display the welcome page with the username
    var welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.textContent = "Welcome, " + username + "!";
    document.getElementById("welcome").classList.remove("hidden");
  }
  