<?php
  if (isset($_SESSION['loged'])) {
    if ($_SESSION['loged'] == 1) {
      header('Location: home.php');
    }
  }
  elseif (isset($_POST['uname']) && isset($_POST['passwd'])) {
    if ($_POST['uname'] == "intruder" && $_POST['passwd'] == "studds") {
      $_SESSION['loged'] = 1;
    }
  }

 ?>

 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8">
     <title>Autoking</title>
   </head>
   <body>
     <form class="" action="index.php" method="post">
       <input type="text" name="uname" placeholder="username">
       <input type="password" name="passwd" placeholder="username">
       <input type="submit" value="Authenticate">
     </form>
   </body>
 </html>
