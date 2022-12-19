 <?php
  //  * Info@zerosec.in

  if (isset($_POST['submit'])) {
    $name = $_POST['submit'];
    $email = $_POST['email'];
    $message = $_POST['message'];



    $mailTo = "Kanapathipillaivinothraj@gmail.com";
    $headers = "From : " .$email;

    $txt = "New message is".$name ."\n,\n" .$message;

    mail($mailTo, $name, $txt, $headers);
    header("Location:index.html");
  }
  ?>