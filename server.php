<?php
   session_start();
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // Retrieve the user's credentials from the AJAX request
      $username = $_POST['username'];
      $password = $_POST['password'];
      
      // Check if the user's credentials are valid
      if($username == "admin" && $password == "password") {
         $_SESSION['login_user'] = $username; // Initializing Session
         echo "success"; // Send a success message back to the client-side
      } else {
         echo "Invalid Username or Password"; // Send an error message back to the client-side
      }
   }
?>