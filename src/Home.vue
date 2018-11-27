<template>
<html>
<head>
    <meta charset="UTF-8">
    <title>Red Maple - NGS Webportal</title>
    <link rel="stylesheet" type="text/css" href="./CSS/style.css"/>

</head>
<body>

<div class="container">
<form action="/action_page.php" style="width: 720px;
background-color: rgb(255, 255, 255);
margin-left: 396px;">

  <div class="imgcontainer">
    <h2>Next Generation Sequencing</h2>
    <h3>Webportal</h3>

    <img src="./img/RedMaple.png" alt="Avatar" class="avatar">
  </div>

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
        
    <button type="submit" style="    width: 90px;
    float: right;
    padding: 4px;">Login</button>
        <button type="button" class="cancelbtn">Cancel</button>

    <label>
    </label>
  </div>

  <div class="container" style="background-color:#f1f1f1">
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
</div>
</body>
</html>
</template>

