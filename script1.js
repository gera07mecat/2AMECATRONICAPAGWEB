function login() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "login.php", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        // Redirect the user to the dashboard page upon successful login
        window.location.href = "dashboard.html";
      }
    }
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    xhr.send(JSON.stringify({username: username, password: password}));
  }